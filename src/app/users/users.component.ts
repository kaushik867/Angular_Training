import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users=[];
  constructor(private _http: UsersService) { }

  ngOnInit(): void {
    this._http.getUser().subscribe(data=>{
      this.users=data;
    })
  }

}
