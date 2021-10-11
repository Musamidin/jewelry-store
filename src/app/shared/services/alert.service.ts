import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {IAlert} from '../interfaces/IAlert';

@Injectable()
export class AlertService {
  public alert$ = new Subject<IAlert>();

  success(text: string) {
    this.alert$.next({type: 'success', text});
  }

  info(text: string) {
    this.alert$.next({type: 'info', text});
  }

  warning(text: string) {
    this.alert$.next({type: 'warning', text});
  }

  error(text: string) {
    this.alert$.next({type: 'error', text});
  }
}
