import { Component, OnInit, Input, Inject, ViewChild, ElementRef } from '@angular/core'
import { JQ_TOKEN } from './jquery.service'

@Component({
  selector: 'simple-modal',
  template: `
    <div id="{{elementId}}" #modal class="modal fade" tabIndex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
            <h4 class="modal-title">{{title}}</h4>
          </div>
          <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-body { height: 250px; overflow-y: scroll; }
  `]
})

export class SimpleModalComponent implements OnInit {
  @Input() public title: string
  @Input() public elementId: string
  @Input() public closeOnClick: string

  @ViewChild('modal') private _modalRef: ElementRef

  private get _modal(): HTMLElement {
    return this._modalRef.nativeElement
  }

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() { }

  closeModal() {
    if (this.closeOnClick.toLocaleLowerCase() === 'true') {
      this.$(this._modal).modal('hide')
    }
  }
}
