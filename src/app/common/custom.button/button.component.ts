import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  btnSize = 'medium';

  @Input() disabled;

  @Input() set size(size: string) {
    if (size !== 'small' && size !== 'medium' && size !== 'large') {
      this.btnSize = 'medium';
      return;
    }
    this.btnSize = size;
  }

  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
}
