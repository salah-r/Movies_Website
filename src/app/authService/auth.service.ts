import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _httpclient: HttpClient, private _Router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem('userData') != null) {
      this.setUserData();
    }
  }

  userData = new BehaviorSubject(null)



  register(userData: object): Observable<any> {
    return this._httpclient.post("https://movies-api.routemisr.com/signup", userData,
      {
        responseType: 'json',
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        })
      }) ///'API endPoint URL For Register', Data Sent To API,headers of http request)\
  }

  login(userData: object): Observable<any> {
    return this._httpclient.post(`https://movies-api.routemisr.com/signin`, userData,
      {
        responseType: 'json',
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        })
      })

    ///'API endPoint URL for SignIn ', Data Sent To API)
  }

  setUserData(): void {

    let encodedData = JSON.stringify(localStorage.getItem("userData"));

    let decodedData: any = jwtDecode(encodedData);

    console.log(decodedData);

    this.userData.next(decodedData);
  }


  logout(): void {
    localStorage.removeItem('userData')
    this.userData.next(null)
    this._Router.navigate(['/login'])

  }



}

