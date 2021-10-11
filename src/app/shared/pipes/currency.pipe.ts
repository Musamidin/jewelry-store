import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class CurrencyPipe implements PipeTransform {
  transform(num: number): string {
    if (num === 1) {
      return 'KGS';
    }
    else if (num === 2) {
      return 'USD';
    }else {
      return '';
    }
  }

}
