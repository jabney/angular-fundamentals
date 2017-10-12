import { Component, OnInit } from '@angular/core'
import { EventThumbnailComponent } from './event-thumbnail.component';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular 2 Events</h1>
      <hr>
      <event-thumbnail *ngFor="let event of events" [event]="event"
        (eventClick)="handleClick($event)"></event-thumbnail>
    </div>
  `
})

export class EventsListComponent implements OnInit {
  events = [
    {
      id: 1,
      name: 'Angular Connect',
      date: '9/26/2036',
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/app/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      }
    },
    {
      id: 1,
      name: 'Angular Connect',
      date: '9/26/2036',
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/app/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      }
    }
  ]
  constructor() { }

  ngOnInit() { }

  handleClick(component: EventThumbnailComponent) {
    console.log(component)
  }
}
