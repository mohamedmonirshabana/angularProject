import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-dound-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  
  

  constructor(private services: PostService ) {
    
  }
  ngOnInit() {
    this.services.getAll()
      .subscribe(posts =>this.posts = posts);
  }

  

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.services.create(post)
      .subscribe((newPost : any) => {
        post.id = newPost.id;
        this.posts.splice(0,0,post);
        console.log(newPost);
      },
        (error: AppError) => {
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          } else throw error;
       });
  }
  updatePost(post: any) {
    // this.http.patch(this.url+'/'+post.id, JSON.stringify({ isRead: true }))
    this.services.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost);
      });
    // this.http.put(this.url, JSON.stringify(post));
  }
  deletePost(post: any) {
    // this.http.delete(this.url + '/' + post.id)
    this.services.delete(post.id)
      .subscribe(
        ()    => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('this Post has already been Deleted');
          
        } else throw error;
      });
  }
}
