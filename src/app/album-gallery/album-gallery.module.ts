import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './albums/album/album.component';
import { GalleryComponent } from './albums/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from '../user/user.module';
import { AlbumsComponent } from './albums/albums.component';
import { MaterialModule } from '../material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { LoderModuleModule } from '../loader/loder-module/loder-module.module';

const proRoute: Routes = [
  { path: '' , component: AlbumsComponent , 
children:[
  {path: '' , component: AlbumComponent},
  {path: 'gallery/:id' , component: GalleryComponent},
]}
]


@NgModule({
  declarations: [
    AlbumComponent,
    GalleryComponent,
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LoderModuleModule,
    MaterialModule,
    RouterModule.forChild(proRoute)
  ],
  exports:[
    AlbumsComponent,
    AlbumComponent,
    GalleryComponent
  ]
})
export class AlbumGalleryModule {
  constructor(){
    console.log("album loaded");
  }
 }
