import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { EventsListComponent } from './events-list.component'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: \${{event.price}}</div>
      <div>
        <span>Location: {{event.location.address}}</span>
        <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .pad-left { margin-left: 0.5em; }
    .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any

  constructor(private _parent: EventsListComponent) { }

  ngOnInit() { }

  logFoo() {
    console.log(this.event.name, this._parent)
  }
}
