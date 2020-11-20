import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private _http: HttpClient) { }

  getAlbums():Observable<[]>{
   return this._http.get<[]>("https://jsonplaceholder.typicode.com/albums");
  }
}
