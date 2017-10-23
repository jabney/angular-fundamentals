import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'
import { IEvent } from './index'
import 'rxjs/add/operator/map'

@Injectable()
export class EventsListResolverService implements Resolve<IEvent[]> {

  constructor(private _es: EventService) { }

  resolve() {
    return this._es.getEvents().map((events) => events)
  }
}
