import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'https://jsonplaceholder.typicode.com/'
  private postsUrl = 'posts/'
  private commentUrl = 'comments?postId='
  // posts:any = [
  //   {title:'Proactively seize e-business paradigms vis-a-' },
  //   {title:'Proactively seize e-business paradigms vis-a-' },
  //   {title:'Proactively seize e-business paradigms vis-a-' },
  //   {title:'Proactively seize e-business paradigms vis-a-' },
  //   {title:'Proactively seize e-business paradigms vis-a-' },
  //   {title:'Proactively seize e-business paradigms vis-a-' },
  //   {title:'Proactively seize e-business paradigms vis-a-' },
  //   {title:'Proactively seize e-business paradigms vis-a-' },
  //   {title:'Proactively seize e-business paradigms vis-a-' },
  //   {title:'Proactively seize e-business paradigms vis-a-' },
  // ]
  constructor(private http:HttpClient) {  }

  getPosts(): Observable<any>{
    return this.http.get(this.url + this.postsUrl)
  }

  getPost(i:number): Observable<any>{
    return this.http.get(this.url + this.postsUrl + i)
  } 

  getComment(i:number): Observable<any>{
    return this.http.get(this.url + this.commentUrl + i)
  } 


}
