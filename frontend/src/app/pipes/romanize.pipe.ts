import { Pipe, PipeTransform } from '@angular/core';
import { romanize, arabicize, romanizeSafe } from "@dunkelhaiser/numeri-romani";

@Pipe({
  name: 'romanize',
  standalone: true
})
export class RomanizePipe implements PipeTransform {

  transformedValue?: string

  transform(value: number, ...args: unknown[]): string {
    return this.transformedValue = romanizeSafe(value)
  }

}
