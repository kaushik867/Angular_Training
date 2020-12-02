import { Component, OnInit } from '@angular/core';
import { LoaderserviceService } from '../loader/loaderservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public isCollapsed=true;
opened=false;
hello=true;
  constructor(public loader: LoaderserviceService) { }

  ngOnInit(): void {
  }

}
