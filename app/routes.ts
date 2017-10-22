import { Routes } from '@angular/router'

import {
  EventRouteActivatorService,
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventsListResolverService,
  CreateSessionComponent
} from './events/index'

import { Error404Component } from './errors/404.component'
import { UserModule } from './user/user.module'

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent,
    resolve: {events: EventsListResolverService} },
  { path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']},
  { path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]},
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full'}
]
