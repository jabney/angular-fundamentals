import { Directive, OnInit, Inject, ElementRef } from '@angular/core'
import { JQ_TOKEN } from './jquery.service'

@Directive({ selector: '[modal-trigger]' })
export class ModalTriggerDirective implements OnInit {
  private _element: HTMLElement

  constructor(
    private _er: ElementRef,
    @Inject(JQ_TOKEN) private $: any
  ) {
    this._element = this._er.nativeElement
  }

  ngOnInit() {
    this._element.addEventListener('click', (event) => {
      this.$('#simple-modal').modal({})
    })
  }
}
