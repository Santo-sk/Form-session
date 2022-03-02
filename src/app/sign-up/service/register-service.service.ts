import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http:HttpClient) { }

  registerUser(data:any){
    return this.http.post(`http://localhost:8080/stg/register-user`,data);

  }


}
