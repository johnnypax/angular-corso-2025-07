import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList {

  elenco: Post[] = [];

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .subscribe(data => {
        this.elenco = data;
      })
  }

}
