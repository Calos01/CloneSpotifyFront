import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroDTO } from './Models/RegistroDTO';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  urlSignup="https://localhost:7122/api/Signup/"
  constructor(private http:HttpClient) { }
  

  registerUser(regdto:RegistroDTO){
    var url=this.urlSignup+"register";
    return this.http.post(url, regdto, { responseType: 'text'});
  }
}
