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
    this.services.getPost()
      .subscribe(response => {
        // console.log(response);
        this.posts = response;
      });
  }

  

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    // this.http.post(this.url, JSON.stringify(post))
    this.services.createPost(post)
      .subscribe((response : any) => {
        post.id = response.id;
        this.posts.splice(0,0,post);
        console.log(response);
      },
        (error: AppError) => {
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          } else throw error;
       });
  }
  updatePost(post: any) {
    // this.http.patch(this.url+'/'+post.id, JSON.stringify({ isRead: true }))
    this.services.updatePost(post)
      .subscribe(response => {
        console.log(response);
      });
    // this.http.put(this.url, JSON.stringify(post));
  }
  deletePost(post: any) {
    // this.http.delete(this.url + '/' + post.id)
    this.services.deletePost(345)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('this Post has already been Deleted');
          
        } else throw error;
      });
  }
}
