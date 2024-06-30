import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../authService/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  registerForm: FormGroup = new FormGroup(
    {
      first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
      last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
      age: new FormControl(null, [Validators.required, Validators.min(15), Validators.max(80)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z]{2,5}$/)])

    }

  )
  regError: string = ''
  onSubmit(formInfo: FormGroup) {

    this._AuthService.register(formInfo.value).subscribe((response) => {


      console.log(formInfo.value)

      console.log(response)


      if (response.message == "success") {

        /// 7wl le saf7t el logIn

        this._Router.navigate(["/login"])
      }
      else {
        this.regError = 'Email has already registered';
      }
    })
  }


}
