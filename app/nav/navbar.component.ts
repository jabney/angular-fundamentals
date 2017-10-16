import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: 'app/nav/navbar.component.html',
  styles: [`
    .nav.navbar-nav { font-size: 15px; }
    #searchForm { margin-right: 100px; }
    @media (max-width: 1200px) { #searchForm { display: none; } }
    li > a.active { color: #f97924}
  `]
})

export class NavbarComponent implements OnInit {
  constructor(private _as: AuthService) { }

  ngOnInit() { }

  get currentUser() {
    return this._as.currentUser
  }

  isAuthenticated() {
    return this._as.isAuthenticated()
  }

}
