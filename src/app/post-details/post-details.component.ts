import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderserviceService } from '../loader/loaderservice.service';
import { CommentsService } from '../Services/comments.service';
import { PostsService } from '../Services/posts.service';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  posts=[];
  comments=[];
  users=[];
  totalComment=0;
  currentComment=0;
  commentDisplayed=true;
  constructor(private router: ActivatedRoute, private _httpPost: PostsService, private _httpComm: CommentsService, 
    private _httpUser: UsersService, private route: Router, public loader: LoaderserviceService ) { }
  id;
  display=true;
  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get('id');
    this._httpPost.getPosts().subscribe(data=>{
      this.posts=data;
      this.display=false;
    },error=>{ this.route.navigate(['./error'])})
    this._httpComm.getComments().subscribe(data=>{
      this.comments=data;
    },error=>{this.route.navigate(['./error'])})
    this._httpUser.getUser().subscribe(data=>{
      this.users=data;
    },error=>{this.route.navigate(['./error'])})
  }


  check(){
    if(this.posts.length){
      var number = parseInt(this.id);
      var max= this.posts[this.posts.length-1].id;
      if(number && number>=0 && number<=max)
        return true;
      else
       return false;
    }
  }

  comment(){
    this.currentComment=0;
    this.totalComment=0;
    for(var comment of this.comments){
      if(this.id == comment.postId)
        this.totalComment+=1; 
    }
    return this.totalComment;
  }

}
