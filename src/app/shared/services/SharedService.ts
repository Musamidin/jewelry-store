import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ICash, IResponseKassa} from '../interfaces/IResponse';

@Injectable({ providedIn: 'root' })
export class SharedService {
  sharedData = new Subject<any>();
  cashUpdate: IResponseKassa;
  private subject = new Subject<any>();
  // tslint:disable-next-line:typedef
  sendClickEvent() {
    this.subject.next();
  }
  getClickEvent(): Observable<any>{
    return this.subject.asObservable();
  }
}
