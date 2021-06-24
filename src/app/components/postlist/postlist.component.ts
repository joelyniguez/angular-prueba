import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
// import { PostsService } from './services/posts.service'

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  posts:any[] = []
  constructor(private _postsService:PostsService) { 
    // this.posts = _postsService.getPosts()
  }

  ngOnInit(): void {
    this.getPostsList()
  }

  getPostsList(){
    this._postsService.getPosts().subscribe(data =>{
      console.log(data)
      this.posts = data
    }, err =>{
      console.log(err)
    })
  }

}
