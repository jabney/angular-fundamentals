import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { IEvent } from './event.model'
import { eventData } from './event-data'
import 'rxjs/add/operator/map'

@Injectable()
export class EventService {

  constructor() { }

  getEvents(): Observable<IEvent[]> {
    const subject = new Subject<IEvent[]>()
    setTimeout(() => { subject.next(eventData.slice()); subject.complete() }, 100)
    return subject.asObservable()
  }

  getEvent(id: number): IEvent {
    return eventData.find((event) => event.id === id)
  }

  saveEvent(event: IEvent) {
    event.id = 999
    event.sessions = []
    eventData.push(event)
  }

  updateEvent(event: IEvent) {
    // const _event = this.getEvent(event.id)
    const index = eventData.findIndex((e) => e.id === event.id)
    eventData[index] = event
  }
}
