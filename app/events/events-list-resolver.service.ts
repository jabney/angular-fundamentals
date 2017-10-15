import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventsListResolverService implements Resolve<any> {

  constructor(private _es: EventService) { }

  resolve() {
    return this._es.getEvents().map((events) => events)
  }
}