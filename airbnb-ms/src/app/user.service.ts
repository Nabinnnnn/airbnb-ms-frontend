import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string='http://localhost:8081/user';

  constructor(private http:HttpClient) { }



  login(user:User):Observable<string>{
    //@ts-ignore
    
return this.http.post<string>(this.url.concat('/login'),user,{responseType:'text'});
  }
  signUp(user:User):Observable<string>{
    //@ts-ignore
    return this.http.post<string>(this.url.concat('/signup'),user,{responseType:'text'});
  }
}
