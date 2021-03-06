import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms'
import { ISession, restrictedWords } from '../index'

@Component({
  selector: 'create-session',
  templateUrl: 'app/events/event-details/create-session.component.html',
  styles: [`
    em { float: right; color: #e05c65; padding-left: 10px; }
    .error input, .error select, .error textarea { background-color: #e3c3c5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-input-placeholder { color: #999; }
    .error :-moz-input-placeholder { color: #999; }
    .error :-ms-input-placeholder { color: #999; }
  `]
})

export class CreateSessionComponent implements OnInit {
  @Output() public saveNewSession = new EventEmitter<ISession>()
  @Output() public cancelAddSession = new EventEmitter<void>()

  public newSessionForm: FormGroup
  public name: FormControl
  public presenter: FormControl
  public duration: FormControl
  public level: FormControl
  public abstract: FormControl

  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(['foo', 'bar'])
    ])

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  saveSession(formValue: any) {
    const session: ISession = {
      id: null,
      name: formValue.name,
      presenter: formValue.presenter,
      duration: +formValue.duration,
      level: formValue.level,
      abstract: formValue.abstract,
      voters: []
    }
    this.saveNewSession.emit(session)
  }

  cancel() {
    this.cancelAddSession.emit()
  }
}
