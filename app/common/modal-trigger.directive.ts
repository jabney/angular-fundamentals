import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core'
import { JQ_TOKEN } from './jquery.service'

@Directive({ selector: '[modal-trigger]' })
export class ModalTriggerDirective implements OnInit {
  @Input('modal-trigger') modalId: string

  constructor(
    private _ref: ElementRef,
    @Inject(JQ_TOKEN) private $: any
  ) { }

  private get _element(): HTMLElement {
    return this._ref.nativeElement
  }

  ngOnInit() {
    this._element.addEventListener('click', (event) => {
      this.$(`#${this.modalId}`).modal({})
    })
  }
}
