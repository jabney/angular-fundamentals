import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service'
import { EventsListResolverService } from './events/events-list-resolver.service'
import { UserModule } from './user/user.module'

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent,
    resolve: {events: EventsListResolverService} },
  { path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']},
  { path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]},
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full'}
]
