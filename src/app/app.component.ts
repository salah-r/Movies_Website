import { Component } from '@angular/core';
import { AuthService } from './authService/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'finalproject';
  constructor(private _AuthService: AuthService) {


    // _AuthService.userData.subscribe(() => {

    //   if (_AuthService.userData.getValue() != null) {

    //     setTimeout(() => { _AuthService.logout() }, 5000);//logout auto after 5 seconds from logging in .
    //   }
    // })

  }



}


