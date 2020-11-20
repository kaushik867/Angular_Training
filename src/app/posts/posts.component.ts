import { Component, OnInit } from '@angular/core';
import { PostsService } from '../Services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  startIndex=0;
  dataLen=10;
  lastIndex= 10;
  totalPage;
  currentPage=0;
  constructor(private _http: PostsService) { }
  posts=[];
  ngOnInit(): void {
    this._http.getPosts().subscribe(data=>{
      this.posts=data;
      this.totalPage=data.length/this.dataLen;
    })
  }

nextPrevious(flag){
  if(flag)
    this.currentPage=this.currentPage+1;
  else
    this.currentPage=this.currentPage-1;
  
    this.startIndex = this.currentPage*this.dataLen;
    this.lastIndex = this.startIndex+this.dataLen;
}
}
