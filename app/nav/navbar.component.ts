import { Component, OnInit } from '@angular/core'
import { AuthService } from '../user/auth.service'
import { ISession, EventService } from '../events/index'

@Component({
  selector: 'navbar',
  templateUrl: 'app/nav/navbar.component.html',
  styles: [`
    .nav.navbar-nav { font-size: 15px; }
    // #searchForm { margin-right: 100px; }
    // @media (max-width: 992px) { #searchForm { display: none; } }
    li > a.active { color: #f97924}
  `]
})

export class NavbarComponent implements OnInit {
  public searchTerm: string = ''
  public foundSessions: ISession[]

  constructor(
    private _as: AuthService,
    private _es: EventService
  ) { }

  ngOnInit() { }

  get currentUser() {
    return this._as.currentUser
  }

  isAuthenticated() {
    return this._as.isAuthenticated()
  }

  searchSessions(term) {
    this._es.searchSessions(term).subscribe((sessions) => {
      this.foundSessions = sessions
    })
  }
}
