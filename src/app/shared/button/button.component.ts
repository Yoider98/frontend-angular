import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [disabled]="disabled" (click)="onClick()">{{ text }}</button>
  `,
  styles: []
})
export class ButtonComponent {
  @Input() text: string = 'Botón';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
