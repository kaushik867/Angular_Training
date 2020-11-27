import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { LoaderserviceService } from '../loader/loaderservice.service';
import { PostsService } from '../Services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  pageEvent: PageEvent;
  dataLen=10;
  currentPage=0;
  totalPage;
  posts=[];
  constructor(private _http: PostsService, private route: Router, private loader: LoaderserviceService) { }
 
  ngOnInit(): void {
    this._http.getPosts().subscribe(data=>{
      this.posts=data;
      this.totalPage=data.length;
    },error=>{
      this.route.navigate(['error']);
    })
  }

}
