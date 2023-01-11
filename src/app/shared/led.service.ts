import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { Leds } from '../model/led';

@Injectable({
  providedIn: 'root',
})
export class LedService {
  private leds = [
    {
      index: 0,
      color: 'red',
    },
    {
      index: 1,
      color: 'green',
    },
    {
      index: 2,
      color: 'yellow',
    },
  ];

  constructor(private readonly client: HttpClient) {}

  /**
   *
   * @returns
   */
  readLeds(): Observable<Leds> {
    // https://347eb1836965ec040f474bd7f78d4730.balena-devices.com/api/colors

    const url =
      'https://347eb1836965ec040f474bd7f78d4730.balena-devices.com/api/colors';

    const result$ = this.client.get<string[]>(url);

    return result$.pipe(
      delay(5000),
      map((value) => {
        return value.map((color, index) => {
          return {
            index,
            color,
          };
        });
      }),
      catchError((err) => of(this.leds))
    );
  }
}
