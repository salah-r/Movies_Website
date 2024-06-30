import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../authService/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  loginForm: FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z]{2,5}$/)])
    }
  )

  onLogin(formInfo: FormGroup) {

    this._AuthService.login(formInfo.value).subscribe((response) => {
      console.log(response)

      if (response.message == "success") {

        localStorage.setItem("userData", JSON.stringify(response.token))
        this._AuthService.setUserData();
        // /// 7wl le saf7t el homePage

        this._Router.navigate(["/home"])
      }
      else {
        this.error = 'Password or Email is Incorrect'
      }
    })


  }
  error: String = ''


}
