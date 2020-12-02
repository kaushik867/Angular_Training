import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../loader/interceptor.service';
import { MaterialModule } from '../material/material.module';
import { UserModule } from '../user/user.module';
import { RouterModule, Routes } from '@angular/router';

const proRoute: Routes= [
  { path: 'posts' , component: PostsComponent},
  { path: 'posts/:id' , component: PostDetailsComponent},
]

@NgModule({
  declarations: [
    PostDetailsComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    UserModule,
    RouterModule.forChild(proRoute)
  ],
  exports:[
    PostDetailsComponent,
    PostsComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
  ]
})
export class PostModule {
  constructor(){
    console.log("post loaded");
  }
 }
