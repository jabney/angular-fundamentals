import { Component, OnInit } from '@angular/core'
import { EventThumbnailComponent } from './event-thumbnail.component'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular 2 Events</h1>
      <hr>
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events" >
          <event-thumbnail #thumb [event]="event"
            (click)="handleThumbnailClick(event.name)"
          ></event-thumbnail>
        </div>
      </div>
    </div>
  `
})

export class EventsListComponent implements OnInit {
  public events: any[]

  constructor(
    private _es: EventService,
    private _ts: ToastrService
  ) { }

  ngOnInit() {
    this.events = this._es.getEvents()
  }

  handleThumbnailClick(eventName: string) {
    this._ts.success(eventName, 'event')
  }
}
