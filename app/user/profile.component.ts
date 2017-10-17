import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
    em { float: right; color: #e05c65; padding-left: 10px; }
    .error input { background-color: #e3c3c5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-input-placeholder { color: #999; }
    .error :-moz-input-placeholder { color: #999; }
    .error :-ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup

  constructor(
    private _as: AuthService,
    private _router: Router
  ) { }

  public ngOnInit() {
    const firstName = new FormControl(
      this._as.currentUser.firstName, [
        Validators.required,
        Validators.pattern(/[A-Za-z].*/)
      ])

    const lastName = new FormControl(
      this._as.currentUser.lastName, [
        Validators.required
    ])

    this.profileForm = new FormGroup({ firstName, lastName })
  }

  public cancel() {
    this._router.navigate(['/events'])
  }

  public save(value: any) {
    if (this.profileForm.valid) {
      this._as.updateCurrentUser(value.firstName, value.lastName)
      this._router.navigate(['/events'])
    }
  }

  public controlIsValid(control: FormControl) {
    return control.valid || control.untouched
  }

  public controlErrorMsg(control: FormControl) {
    const msg = {
      required: 'Required',
      pattern: 'Must start with a letter'
    }
    return msg[Object.keys(control.errors)[0]]
  }
}

