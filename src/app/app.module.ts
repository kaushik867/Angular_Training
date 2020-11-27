import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { GalleryComponent } from './albums/gallery/gallery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlbumComponent } from './albums/album/album.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServerErrorComponent } from './server-error/server-error.component';
import { LoaderComponent } from './loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from './loader/interceptor.service';
import { MaterialModule } from './material/material.module'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    AlbumsComponent,
    GalleryComponent,
    PageNotFoundComponent,
    AlbumComponent,
    UsersComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    ServerErrorComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
