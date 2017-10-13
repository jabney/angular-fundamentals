import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavbarComponent } from './nav/navbar.component'

@NgModule({
  imports: [ BrowserModule ],
  exports: [],
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  bootstrap: [ EventsAppComponent ],
  providers: [],
})
export class AppModule { }
