import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {interval, Observable, pipe, Subject, Subscription, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import {IAuthResponse, IUser} from '../interfaces/IUser';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthService {
  sub!: Subscription;
  public error$: Subject<string> = new Subject<string>();
  public interStr$ = interval(1000);

  constructor(private http: HttpClient, private router: Router){
    this.checker();
  }

  checker(): any {
    this.sub = this.interStr$.subscribe(() => {
      if (!this.token){
        this.logout();
        this.router.navigate(['login'],
          {
            queryParams: {loginAgain: true}
          });
      }
    });
  }

  get token(): any {
    let storeExpDate: string | null = Date.now().toString();
    let expDate!: Date;
    storeExpDate = localStorage.getItem('token-exp');
    expDate = (storeExpDate !== null) ? new Date(storeExpDate) : new Date(Date.now());

    if (new Date() > expDate) {
      this.logout();
      this.sub.unsubscribe();
      return null;
    }
    return localStorage.getItem('token');
  }

  login(user: IUser): Observable<any> {
    user.returnSecureToken = true;

    // @ts-ignore
    return this.http.post(`${environment.dbUrl}/auth/login`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  private handleError(error: HttpErrorResponse): any {
    this.error$.next(error.error.errors[0]);
    return throwError(error);
  }

  logout(): any {
    // @ts-ignore
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!!this.token;
  }

  private setToken(response: any): any {
    if (response && response.token) {
      const decoded = jwt_decode(response.token);
      // @ts-ignore
      const expDate = new Date(+decoded.exp * 1000);
      // @ts-ignore
      localStorage.setItem('user', JSON.stringify({ email: decoded.email, role: decoded.role }));
      localStorage.setItem('token', response.token);
      localStorage.setItem('token-exp', expDate.toString());
    }else{
      localStorage.clear();
    }

  }
}
