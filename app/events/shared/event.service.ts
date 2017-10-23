import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { IEvent } from './event.model'
import { eventData } from './event-data'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/delay'

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
    const index = eventData.findIndex((e) => e.id === event.id)
    eventData[index] = event
  }

  searchSessions(term: string) {
    const reTerm = new RegExp(term, 'i')

    return Observable.of(eventData.reduce((list, event) => {
      return list.concat(event.sessions.filter((session) => {
        return reTerm.test(session.name) || reTerm.test(session.abstract)
      }).map((session) => ({ eventId: event.id, eventName: event.name, session })))
    }, []))
  }
}
