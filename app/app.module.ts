import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { EventsAppComponent } from './events-app.component'
import { NavbarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'
import { CollapsibleWellComponent } from './common/collapsible-well.component'
import { SimpleModalComponent } from './common/simple-modal.component'

import { ModalTriggerDirective } from './common/modal-trigger.directive'

import {
  EventService,
  EventRouteActivatorService,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventsListResolverService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index'

import { AuthService } from './user/auth.service'
import { Toastr } from './common/toastr.service'
import { JQ_TOKEN } from './common/jquery.service'

import { appRoutes } from './routes'

declare const toastr: Toastr
declare const jQuery: (selector: any) => any

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    CreateSessionComponent,
    SessionListComponent,
    Error404Component,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe
  ],
  bootstrap: [ EventsAppComponent ],
  providers: [
    EventService,
    AuthService,
    EventRouteActivatorService,
    EventsListResolverService,
    { provide: Toastr, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
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
