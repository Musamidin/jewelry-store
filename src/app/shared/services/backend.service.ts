import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {IProd, ISaleProd, ISetProdResponse} from '../interfaces/IProd';
import {IMainListViewMod} from '../interfaces/IMainListView';
import {IAutocompleteResponse} from '../interfaces/IAutocomplete';
import {IRequestPartPay} from '../interfaces/IRequest';
import {IResponse, IResponseKassa, ISetLogs, ISetUser} from '../interfaces/IResponse';

@Injectable({providedIn: 'root'})
export class BackendService {
  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient){}

  getProd(pageSize: number, pageNum: number, id: number): Observable<IMainListViewMod>
  {
    return this.http.get<IMainListViewMod>(`${environment.dbUrl}/prod/getprodlist/${pageSize}/${pageNum}/${id}`)
      .pipe(map((response: IMainListViewMod) => {
        return response;
      }));
  }
  setProd(prod: IProd): Observable<ISetProdResponse>{
    return this.http.post<ISetProdResponse>(`${environment.dbUrl}/prod/createprod`, prod)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  saleProd(saleProd: ISaleProd): Observable<IResponse>{
    return this.http.post<ISaleProd>(`${environment.dbUrl}/prod/saleprod`, saleProd)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  getClientSearch(term: string): Observable<IAutocompleteResponse>{
    return this.http.get<IAutocompleteResponse>(`${environment.dbUrl}/prod/getclientbyterm/${term}`)
      .pipe(map((response: IAutocompleteResponse) => {
        return response;
      }));
  }

  getSupplierSearch(term: string): Observable<IAutocompleteResponse>{
    return this.http.get<IAutocompleteResponse>(`${environment.dbUrl}/prod/getsupplierbyterm/${term}`)
      .pipe(map((response: IAutocompleteResponse) => {
        return response;
      }));
  }

  partPay(pp: IRequestPartPay): Observable<IResponse> {
    return this.http.post<IRequestPartPay>(`${environment.dbUrl}/prod/partpay`, pp)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  getKassa(): Observable<IResponseKassa>{
    return this.http.get<IResponseKassa>(`${environment.dbUrl}/report/getkassa`)
      .pipe(map((response: IResponseKassa) => {
        return response;
      }));
  }

  setCash(cash: IResponseKassa): Observable<IResponseKassa> {
    return this.http.post<IResponseKassa>(`${environment.dbUrl}/report/setcash`, cash)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }
  block(ids: number[]): Observable<number[]> {
    return this.http.patch<number[]>(`${environment.dbUrl}/lib/delete`, ids);
  }

  getByBarCode(term: string): Observable<IResponse> {
    return this.http.get(`${environment.dbUrl}/prod/getprodlistbybarcode/${term}`)
      .pipe(map((response: IResponse) => {
        return response;
      }));
  }

  deleteItems(ids: number[]): Observable<number[]> {
    return this.http.patch<number[]>(`${environment.dbUrl}/prod/delete`, ids)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  getLogs(dateFrom: string, dateTo: string): Observable<IResponse>{
    return this.http.get<IResponse>(`${environment.dbUrl}/prod/getlogs/${dateFrom}/${dateTo}`)
      .pipe(map((response: IResponse) => {
          return response;
        }),
        catchError(this.handleError.bind(this))
      );
  }

  setLogs(logs: ISetLogs): Observable<boolean> {
    return this.http.post<ISetLogs>(`${environment.dbUrl}/prod/setlogs`, logs)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  deleteLogs(id: number): Observable<boolean>
  {
    return this.http.delete<number>(`${environment.dbUrl}/prod/deletelogs/${id}`)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  createUpdateUser(data: ISetUser): Observable<any> {
    return this.http.post<ISetUser>(`${environment.dbUrl}/settings/CreateUser`, data)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  getUserList(): Observable<IResponse> {
    return this.http.get<IResponse>(`${environment.dbUrl}/settings/GetUserList`)
      .pipe(map((response: IResponse) => {
          return response;
        }),
        catchError(this.handleError.bind(this))
      );
  }

  getUserRoles(): Observable<IResponse> {
    return this.http.get<IResponse>(`${environment.dbUrl}/settings/GetUserRoles`)
      .pipe(map((response: IResponse) => {
          return response;
        }),
        catchError(this.handleError.bind(this))
      );
  }

  blockUser(userId: number): Observable<any>
  {
    return this.http.put<number>(`${environment.dbUrl}/settings/BlockUser`, userId)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  private handleError(error: HttpErrorResponse): any {
    switch (error.status) {
      case 200 : {this.error$.next(error.error.message); break; }
      case 401 : {this.error$.next('Вы не авторизованны'); break; }
      case 403 : {this.error$.next('У вас нету права доступа!'); break; }
    }
    return throwError(error);
  }
}
