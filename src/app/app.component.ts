import { Component } from '@angular/core';
import { AlbumsService } from './Services/albums.service';
import { CommentsService } from './Services/comments.service';
import { PhotosService } from './Services/photos.service';
import { PostsService } from './Services/posts.service';
import { TodosService } from './Services/todos.service';
import { UsersService } from './Services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-app';
  albums = [];
  constructor(private album: UsersService){}
  ngOnInit(){
    this.album.getUser().subscribe(data=>{
      this.albums = data;
    })
  }
}
