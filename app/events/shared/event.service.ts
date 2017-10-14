import { Injectable } from '@angular/core'
import eventData from './event-data'

@Injectable()
export class EventService {

  constructor() { }

  getEvents() {
    return eventData.slice()
  }

  getEvent(id: number) {
    return eventData.find((event) => event.id === id)
  }
}
