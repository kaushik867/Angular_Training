import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { UsersComponent } from './users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../loader/interceptor.service';
import { LoaderComponent } from '../loader/loader.component';
import { RouterModule, Routes } from '@angular/router';


const proRoute: Routes=[
  { path: 'users' , component: UsersComponent},
]

@NgModule({
  declarations: [
    UsersComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild(proRoute)
  ],
  exports:[
    UsersComponent,
    LoaderComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ]
})
export class UserModule {
  constructor(){
    console.log("users loaded");
  }
 }
