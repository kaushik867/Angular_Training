import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumsService } from 'src/app/Services/albums.service';
import { UsersService } from 'src/app/Services/users.service';
import {PageEvent} from '@angular/material/paginator';
import { LoaderserviceService } from 'src/app/loader/loaderservice.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {

  pageEvent:PageEvent;
  dataLen=10;
  currentPage=0;
  totalPages;
  users=[];
  albums=[];
  
  constructor(private _http: AlbumsService, private _httpUser:UsersService, private route: Router,
    public loader: LoaderserviceService) { }

  ngOnInit(): void {
    this._http.getAlbums().subscribe(data=>{
      this.albums=data;
      this.totalPages=data.length;
  },error=>{ this.route.navigate(['error'])});
  this._httpUser.getUser().subscribe(data=>{
    this.users = data;
  },error=>{this.route.navigate(['error'])})
}

}
