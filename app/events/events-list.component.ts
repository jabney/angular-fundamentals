import { Component, OnInit } from '@angular/core'
import { EventThumbnailComponent } from './event-thumbnail.component'
import eventData from './event-data'

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular 2 Events</h1>
      <hr>
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events" >
          <event-thumbnail #thumb [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `
})

export class EventsListComponent implements OnInit {
  events = eventData

  constructor() { }

  ngOnInit() { }

  handleClick(component: EventThumbnailComponent) {
    console.log(component)
  }
}
