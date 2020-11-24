import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumsService } from 'src/app/Services/albums.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  currentPage=0;
  startIndex=0;
  lastindex=10;
  totalPages;
  dataLen=10;
  users=[];
  albums=[];
  constructor(private _http: AlbumsService, private _httpUser:UsersService, private route: Router) { }

  ngOnInit(): void {
    this._http.getAlbums().subscribe(data=>{
      this.albums=data;
      this.totalPages=data.length/this.dataLen;
  },error=>{ this.route.navigate(['error'])});
  this._httpUser.getUser().subscribe(data=>{
    this.users = data;
  },error=>{this.route.navigate(['error'])})
}

  nextPrevious(flag){
    if(flag){
      this.currentPage+=1;
    }else{
      this.currentPage-=1;
    }

    this.startIndex = this.currentPage * this.dataLen;
    this.lastindex = this.startIndex+this.dataLen;

  }
}
