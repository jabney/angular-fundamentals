import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core'
import { ISession } from '../index'

@Component({
  selector: 'session-list',
  templateUrl: 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnInit, OnChanges {
  @Input() public sessions: ISession[]
  @Input() public filterBy: string
  @Input() public sortBy: string
  public visibleSessions: ISession[] = []

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.sessions) {
      this._filterSessions(this.filterBy)
      this._sortSessions(this.sortBy)
    }
  }

  private _filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice()
    } else {
      this.visibleSessions = this.sessions
        .filter((session) => session.level.toLocaleLowerCase() === filter)
    }
  }

  private _sortSessions(sort: string) {
    sort === 'name'
      ? this.visibleSessions.sort(sortByNameAsc)
      : this.visibleSessions.sort(sortByVotesDesc)
  }
}

function sortByNameAsc(a: ISession, b: ISession) {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
}

function sortByVotesDesc(a: ISession, b: ISession) {
  return b.voters.length - a.voters.length
}
