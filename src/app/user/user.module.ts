import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { UsersComponent } from './users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../loader/interceptor.service';
import { LoaderComponent } from '../loader/loader.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LoderModuleModule } from '../loader/loder-module/loder-module.module';


const proRoute: Routes=[
    {path: '' , component: UsersComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    LoderModuleModule,
    RouterModule.forChild(proRoute)
  ],
  exports:[
    UsersComponent
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
