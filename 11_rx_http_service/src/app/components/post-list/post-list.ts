import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList {

  elenco: Post[] = [];

  constructor(private service: PostService){ }

  ngOnInit(){
    // this.service.getAllPosts().subscribe(val => {
    //   this.elenco = val;
    // })

    this.service.getPostByUserId(1).subscribe(val => {
      this.elenco = val;
    })
  }

}
