import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private htttp: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  loginuser(email: string, password: string): Observable<any> {
    const url_api = "http://localhost:3000/administradores/login?include=user";
    return this.htttp
      .post(
        url_api,
        { email, password },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  setUser(user): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser() {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    let accessToken = localStorage.getItem("accessToken");
    const url_api = `http://localhost:3000/administradores?access_token=${accessToken}`;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.htttp.get(url_api, { headers: this.headers });
  }
}
