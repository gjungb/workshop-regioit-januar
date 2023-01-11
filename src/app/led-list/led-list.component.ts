import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription, tap } from 'rxjs';
import { Led, Leds } from '../model/led';
import { LedService } from '../shared/led.service';

/**
 * Stateful Component
 */
@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss'],
})
export class LedListComponent implements OnInit, OnDestroy {
  leds?: Leds;

  leds$!: Observable<Leds>;

  private sub?: Subscription;

  constructor(private readonly service: LedService) {}

  ngOnInit(): void {
    this.leds$ = this.service
      .readLeds()
      .pipe(tap((value) => console.log(value)));

    const ticker$ = interval(2000);

    this.sub = ticker$.pipe(tap((i) => console.log(i))).subscribe();

    console.log('OnInit');
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  /**
   *
   * @param index
   */
  updateLedColor(index: number): void {
    // effect
    console.log(index);
  }
}
