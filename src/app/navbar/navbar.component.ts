import { Component } from '@angular/core';
import { AuthService } from '../authService/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})




export class NavbarComponent {
  constructor(private _AuthService: AuthService) { }

  isLogin: Boolean = false;


  ngOnInit(): void {

    this._AuthService.userData.subscribe(() => {

      if (this._AuthService.userData.getValue() != null) { this.isLogin = true }

      else { this.isLogin = false }

    })

  }
  callLogOut(): void {

    this._AuthService.logout();
  }


}



