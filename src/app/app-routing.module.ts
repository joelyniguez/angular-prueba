import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Post404Component } from './components/post404/post404.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { PostlistComponent } from './components/postlist/postlist.component';

const routes: Routes = [
  {path: '', component: PostlistComponent},
  {path: 'posts', component: PostlistComponent},
  {path: 'post/:id', component: PostdetailComponent},
  {path: '404', component: Post404Component},
  {path: '**', redirectTo:'404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
