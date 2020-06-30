import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button class="btn btn-dark text-center" *ngIf="!value">{{ value }}</button>
    <button class="btn btn-primary text-center" *ngIf="value == 'X'">{{ value }}</button>
    <button class="btn btn-success text-center" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 3em !important; }']
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}
