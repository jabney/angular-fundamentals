import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent, ISession } from '../index'

@Component({
  templateUrl: 'app/events/event-details/event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
    button.btn:focus { outline: 0; }
    a { cursor: pointer; }
  `]
})

export class EventDetailsComponent implements OnInit {
  public event: IEvent
  public addMode: boolean
  public filter: string = 'all'
  public sort: string = 'name'

  constructor(
    private _es: EventService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.event = this._es.getEvent(+params['id'])
      this.addMode = false
    })
  }

  addSession() {
    this.addMode = true
  }

  saveNewSession(session: ISession) {
    const maxId = Math.max.apply(null, this.event.sessions.map((s) => s.id))
    session.id = maxId + 1
    this.event.sessions.push(session)
    this._es.updateEvent(this.event)
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false;
  }

  setFilter(filter: string) {
    this.filter = filter
  }

  setSort(sort: string) {
    this.sort = sort
  }
}
