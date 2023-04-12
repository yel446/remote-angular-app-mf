import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
})
export class Component1Component {
  @Input() text?: string = ' 😎 Je suis le texte ';

  number_value: number = 0;

  increase() {
    this.number_value++;
  }

  decrease() {
    this.number_value--;
  }

  reset() {
    this.number_value = 0;
  }
}
