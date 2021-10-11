import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(num: number): string {
    if (num === 0) {
      return 'Включен';
    }
    else if (num === 1) {
      return 'Отключен';
    }
  }

}
