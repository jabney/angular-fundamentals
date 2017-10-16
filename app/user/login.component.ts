import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'app/user/login.component.html',
  styles: [`
    em { float: right; color: #e05c65}
  `]
})

export class LoginComponent implements OnInit {
  constructor(
    private _router: Router,
    private _as: AuthService
  ) { }

  ngOnInit() { }

  login(values: any) {
    this._as.loginUser(values.userName, values.password)
    this._router.navigate(['/events'])
  }

  cancel() {
    this._router.navigate(['/events'])
  }

  isInvalid(control) {
    return control && (control.touched || control.dirty) && control.invalid
  }
}
