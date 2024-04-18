import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cmToMeter',
  standalone: true,
})
export class CmToMeterPipe implements PipeTransform {
  transform(value: string): string {
    if (value == null || isNaN(parseFloat(value))) {
      return '';
    }
    const meters = parseFloat(value) / 100;
    return meters.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}
