import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderserviceService } from '../loader/loaderservice.service';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users=[];
  constructor(private _http: UsersService, private route: Router, public loader: LoaderserviceService) { }

  ngOnInit(): void {
    this._http.getUser().subscribe(data=>{
      this.users=data;
    },(error)=>{
      this.route.navigate(['error']);
    })
  }

}
