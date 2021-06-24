import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { postModel } from 'src/app/interfaces/postModel';
// import { ComentariosComponent } from '../comentarios/comentarios.component';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {
  id: number = 0;
  post: any;
  fecha: any;
  constructor(
    private route:ActivatedRoute,
    private _postsService:PostsService
  ) {
    this.route.params.subscribe(params =>{
      console.log(params['id'])
      this.id = params['id']
    })
   }

  ngOnInit(): void {
    this.getIndividualPosts()
  }
  

  getIndividualPosts(){
    this._postsService.getPost(this.id).subscribe(data =>{
      console.log(data)
      this.post = data
      console.log(this.post)
    }, err =>{
      console.log(err)
    })
  }
  
  setFecha(date:any){
    console.log(date)
    this.fecha=date
  }

}
