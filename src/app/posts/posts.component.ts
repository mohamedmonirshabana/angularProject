import { Component, OnInit } from '@angular/core';
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
      }, error => {
        alert('An unExpected Error occurred');
        console.log(error);
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
      }, error => {
        console.log(error);
       });
  }
  updatePost(post: any) {
    // this.http.patch(this.url+'/'+post.id, JSON.stringify({ isRead: true }))
    this.services.updatePost(post)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
    // this.http.put(this.url, JSON.stringify(post));
  }
  deletePost(post: any) {
    // this.http.delete(this.url + '/' + post.id)
    this.services.deletePost(post)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, error => {
        console.log(error);
      });
  }
}
