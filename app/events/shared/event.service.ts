import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Rx'
import eventData from './event-data'

@Injectable()
export class EventService {

  constructor() { }

  getEvents() {
    const subject = new Subject<any[]>()
    setTimeout(() => { subject.next(eventData.slice()); subject.complete() }, 100)
    return subject.asObservable()
  }

  getEvent(id: number) {
    return eventData.find((event) => event.id === id)
  }
}
