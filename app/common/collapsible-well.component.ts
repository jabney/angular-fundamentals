import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content select="[well-body]" *ngIf="visible"></ng-content>
    </div>
  `
})

export class CollapsibleWellComponent implements OnInit {
  public visible: boolean = true

  constructor() { }

  ngOnInit() { }

  toggleContent() {
    this.visible = !this.visible
  }
}
