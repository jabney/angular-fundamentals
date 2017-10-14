import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { EventsListComponent } from './events-list.component'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngStyle]="getStartTimeStyle(event)" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late start)</span>
        <span *ngSwitchDefault>(Normal start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">
          {{event?.location?.city}}, {{event?.location?.country}}
        </span>
      </div>
      <div *ngIf="event?.onlineUrl">
        Online Url: {{event?.onlineUrl}}
      </div>
    </div>
  `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 0.5em; }
    .well div { color: #bbb; }
    .green { color: lime !important; }
    .bold { font-weight: bold; }
  `]
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any

  constructor() { }

  ngOnInit() { }

  getStartTimeClass(event) {
    const isEarlyStart = event && event.time === '8:00 am'

    // Return an object containing css class names set to true or false.
    return { green: isEarlyStart, bold: isEarlyStart }

    // // We could also return a string.
    // if (isEarlyStart) {
    //   return 'green bold'
    // } else {
    //   return ''
    // }

    // // We could aslo return an array of strings.
    // if (isEarlyStart) {
    //   return ['green', 'bold']
    // } else {
    //   return []
    // }
  }

  getStartTimeStyle(event) {
    const isEarlyStart = event && event.time === '8:00 am'

    if (isEarlyStart) {
      return { 'color': 'lime', 'font-weight': 'bold' }
    }

    return {}
  }
}
