import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

public loginUserForRemote(user:User):Observable<any>
{
  return this.http.post<any>("http://localhost:8080/api/v3/user_login",user);
}

public registerUserForLoginCredentials(user:User):Observable<any>
{
  return this.http.post<any>("http://localhost:8080/api/v3/logins",user);
}


}
