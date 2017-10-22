import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './shared/event.service'
import { IEvent } from './shared/event.model'
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: 'app/events/create-event.component.html',
  styles: [`
    em { float: right; color: #e05c65; padding-left: 10px; }
    .error input { background-color: #e3c3c5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-input-placeholder { color: #999; }
    .error :-moz-input-placeholder { color: #999; }
    .error :-ms-input-placeholder { color: #999; }
  `]
})

export class CreateEventComponent implements OnInit, AfterViewInit, OnDestroy {
  // public event: IEvent
  @ViewChild('newEventForm') public form: NgForm

  private _isDirty = false
  private _changesSub: Subscription

  constructor(
    private _router: Router,
    private _es: EventService
  ) {}

  get isDirty(): boolean {
    return this._isDirty
  }

  ngOnInit() {
    // this.event = {
    //   id: 999,
    //   name: 'Ng Spectacular',
    //   date: new Date('8/8/2018'),
    //   time: '10:00 am',
    //   price: 99.99,
    //   location: {
    //     address: '1234 5th St',
    //     city: 'Seattle, WA',
    //     country: 'USA'
    //   },
    //   sessions: [],
    //   onlineUrl: 'http://ngSpectacular.com',
    //   imageUrl: 'http://ngSpectacular.com/logo.png'
    // }
  }

  ngAfterViewInit() {
    this._changesSub = this.form.valueChanges.subscribe((value: any) => {
      this._isDirty = true
    })
  }

  cancel(): void {
    this._router.navigate(['/events'])
  }

  saveEvent(formValue: IEvent): void {
    this._es.saveEvent(formValue)
    this._isDirty = false
    this._router.navigate(['/events'])
  }

  setDirty(): void {
    this._isDirty = true
  }

  ngOnDestroy() {
    this._changesSub.unsubscribe()
  }
}
