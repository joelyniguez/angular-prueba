import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { Post404Component } from './components/post404/post404.component';
import { PostsService } from './services/posts.service'
import { HttpClientModule } from '@angular/common/http';
import { ComentariosComponent } from './components/comentarios/comentarios.component'

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostdetailComponent,
    Post404Component,
    ComentariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
