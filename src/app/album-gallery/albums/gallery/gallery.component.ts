import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderserviceService } from 'src/app/loader/loaderservice.service';
import { PhotosService } from 'src/app/Services/photos.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
id;
display=true;
photos=[];
  constructor(private router: ActivatedRoute, private _http: PhotosService, private route: Router,
    public loader: LoaderserviceService) { }

  ngOnInit(): void {
   let id = this.router.snapshot.paramMap.get('id');
   this.id=id;
   this._http.getPhotos().subscribe(data=>{
   this.photos=data;
   this.display=false;
   },error=>{ 
     this.route.navigate(['/error'])});
  }
check(){
  if(this.photos.length){
    var number = parseInt(this.id);
    var mx = this.photos[this.photos.length-1].albumId;
  }
  
  if(number && (this.id>=0 && this.id<=mx))
    return true;
  else
    return false
}
}
