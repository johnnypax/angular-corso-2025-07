import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { catchError, filter, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  constructor(private http: HttpClient){ }

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
                          .pipe(
                            catchError(err => {
                              console.log(err);
                              return of([])
                            })
                          )
  }

  getPostByUserId(usr: number): Observable<Post[]>{
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
                          .pipe(
                            map(post => {
                              return post.filter(p => p.userId === usr)
                            }),
                            catchError(err => {
                              console.log(err);
                              return of([])
                            })
                          )
  }

}
