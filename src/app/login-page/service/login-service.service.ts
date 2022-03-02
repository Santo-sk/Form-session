import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  loginUser(userId){
    const reqParams=new HttpParams().set('userId',userId);
    return this.http.get(`http://localhost:8080/stg/get-user`, {params:reqParams});

  }
}
