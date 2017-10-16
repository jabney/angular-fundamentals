import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppComponent } from './events-app.component'
import { NavbarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'

import { AuthService } from './user/auth.service'
import {
  EventService,
  EventRouteActivatorService,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventsListResolverService
} from './events/index'

import { ToastrService } from './common/toastr.service'

import { appRoutes } from './routes'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [],
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  bootstrap: [ EventsAppComponent ],
  providers: [
    EventService,
    AuthService,
    ToastrService,
    EventRouteActivatorService,
    EventsListResolverService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event. Cancel anyway?')
  }
  return true
}
