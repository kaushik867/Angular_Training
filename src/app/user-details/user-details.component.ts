import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users=[];
  id;
  display=true;
  constructor(private _http: UsersService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this._http.getUser().subscribe(data=>{
      this.users=data;
      this.display=false;
    });
    this.id= this.router.snapshot.paramMap.get('id');
   
  }

  check(){
    if(this.users.length){
      var number = parseInt(this.id);
      var mx = this.users[this.users.length-1].id;
    }
    if(number && number>=0 && number<=mx )
      return true;
    else
      return false;
  }
}
