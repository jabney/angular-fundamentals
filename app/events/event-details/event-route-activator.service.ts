import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { EventService } from '../shared/event.service'

@Injectable()
export class EventRouteActivatorService implements CanActivate {

  constructor(
    private _router: Router,
    private _es: EventService
  ) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const id = +route.params['id']
    const eventExists = !!this._es.getEvent(id)

    if (!eventExists) {
      this._router.navigate(['/404'])
    }
    return eventExists
  }
}
