import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-dound-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get(this.url)
      .catch(this.handleError);
  }

  createPost(post: any) {
    return this.http.post(this.url, JSON.stringify(post))
      .catch(this.handleError);
  }

  updatePost(post: any) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .catch(this.handleError);
  }

  deletePost(id: any) {
    return this.http.delete(this.url + '/' + id)
      .catch(this.handleError);

  }

  private handleError(error: Response) {
    if (error.status === 400)
          return Observable.throw(new BadInput(error.json()));
    
    if (error.status === 404)
          return Observable.throw(new NotFoundError())
        
        return Observable.throw(new AppError(error));
  }
}
