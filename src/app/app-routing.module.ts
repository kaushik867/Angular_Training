import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AlbumGalleryModule } from './album-gallery/album-gallery.module'
import { from } from 'rxjs';



const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'error' , component: ServerErrorComponent},
  { path: 'users' , loadChildren:'./user/user.module#UserModule'},
  { path: 'posts' , loadChildren: './post/post.module#PostModule'},
  { path: 'album' , loadChildren: './album-gallery/album-gallery.module#AlbumGalleryModule'}
  // { path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
