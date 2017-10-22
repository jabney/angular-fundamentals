import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../index';

@Component({
  selector: 'session-list',
  templateUrl: 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnInit {
  @Input() public sessions: ISession[]

  constructor() { }

  ngOnInit() { }
}
