import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import eventData from './event-data'
import 'rxjs/add/operator/map'

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
