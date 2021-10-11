import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';
import {AlertService} from '../shared/services/alert.service';
import {IUser} from '../shared/interfaces/IUser';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  isLoading = false;
  message!: string;
  error!: string;
  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params.loginAgain) {
        this.message = 'Пожалуйста введите данные';
      }else if (params.authFiled) {
        this.message = 'Сессия истекла. Введите данные заново';
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
    });
  }

  submit(): any {
    if (this.form.invalid)
    {
      return;
    }

    this.submitted = true;
    this.isLoading = true;

    const user: IUser = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['home']);
      this.submitted = false;
      this.isLoading = false;
    }, (err) => {
      this.submitted = false;
      this.isLoading = false;
      this.error = err.error.errors[0];
      setTimeout(() => {
        this.error = '';
      }, 3000);
    });
  }
}
