import { Component, OnInit } from '@angular/core'
import { EventThumbnailComponent } from './event-thumbnail.component'
import { EventService } from './shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './index'

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
  public events: IEvent[]

  constructor(
    private _es: EventService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.events = this._route.snapshot.data['events']
  }
}
