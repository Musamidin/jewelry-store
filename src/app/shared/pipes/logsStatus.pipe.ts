import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'logs'
})
export class LogsStatusPipe implements PipeTransform {
  transform(num: number): string {
    if (num === 1) {
      return 'Приход';
    }
    if (num === 2) {
      return 'Расход';
    }
    return '';
  }

}
