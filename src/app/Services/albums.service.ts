import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private _http: HttpClient) { }

  getAlbums():Observable<[]>{
   return this._http.get<[]>("https://jsonplaceholder.typicode.com/albums")
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "server Error");
  }
}
