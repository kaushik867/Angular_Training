import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private _http: HttpClient) { }
  getTodo():Observable<[]>{
    return this._http.get<[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
