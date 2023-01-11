import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Led } from '../model/led';

/**
 * Stateless / Representational Component
 */
@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss'],
})
export class LedComponent {
  /**
   *
   */
  @Input('piLed')
  led: Led = {
    index: 1,
    color: 'yellow',
  };

  /**
   *
   */
  @Output()
  ledChange = new EventEmitter<number>();

  /**
   *
   */
  handleColorClick(ev: MouseEvent): void {
    if (ev.ctrlKey === true) {
      console.log('clicked', ev);
      // effect
      this.ledChange.emit(this.led.index);
    }
  }
}
