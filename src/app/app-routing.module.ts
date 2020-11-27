import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './albums/album/album.component';
import { AlbumsComponent } from './albums/albums.component';
import { GalleryComponent } from './albums/gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'posts' , component: PostsComponent},
  { path: 'posts/:id' , component: PostDetailsComponent},
  { path: 'album' , component: AlbumsComponent , 
    children:[
      {path: '' , component: AlbumComponent},
      {path: 'gallery/:id' , component: GalleryComponent}
    ]
  },
  { path: 'users' , component: UsersComponent},
  { path: 'error' , component: ServerErrorComponent},
  { path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
