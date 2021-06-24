import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  @Input() id: any
  @Output() emitDate = new EventEmitter<Date>()
  comments: any;
  

  constructor(
    private _postServices:PostsService
  ) { }

  ngOnInit(): void {
    this.getComments()
  }

  getComments(){
    this._postServices.getComment(this.id).subscribe(data =>{
      console.log('comentarios', data)
      this.comments = data
    }, err =>{
      console.log(err)
    })
  }

  emitFecha(){
    this.emitDate.emit(new Date)
  }

}
