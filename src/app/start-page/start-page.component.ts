import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {

  constructor(private _Router: Router) { }

  goLogin(): void {

    this._Router.navigate(['/login'])

  }
  goRegister(): void {

    this._Router.navigate(['/register'])

  }

}
