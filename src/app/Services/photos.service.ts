import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private _http: HttpClient) { }

  getPhotos():Observable<[]>{
    return this._http.get<[]>("https://jsonplaceholder.typicode.com/photos")
               .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }
}
