import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private _http: HttpClient) { }

  getPhotos():Observable<[]>{
    return this._http.get<[]>("https://jsonplaceholder.typicode.com/photos");
  }
}
