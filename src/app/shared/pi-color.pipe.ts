import { Pipe, PipeTransform } from '@angular/core';
import Color from 'color';

@Pipe({
  name: 'piColor',
})
export class PiColorPipe implements PipeTransform {
  /**
   *
   * @param value
   * @param format
   * @returns
   */
  transform(value: string, format?: 'hex' | 'rgb'): string {
    const c = Color(value);
    if (format === 'hex') {
      return c.hex();
    } else if (format === 'rgb') {
      return c.rgb().string();
    }
    return value;
  }
}
