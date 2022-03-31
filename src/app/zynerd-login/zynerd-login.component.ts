import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-zynerd-login',
  templateUrl: './zynerd-login.component.html',
  styleUrls: ['./zynerd-login.component.css'],
})
export class ZynerdLoginComponent implements OnInit {
  userName: string = '';
  password: string = '';
  isEmailErrorMsg: string = '';
  result = {
    success: false,
    message: '',
    data: {
      token: '',
    },
  };
  constructor(private loginService: CommonService, private router: Router,) {}
  ngOnInit(): void {}
  public onLogin() {
    if (this.onEmailValidate() && this.password) {
      this.loginService
        .getLogin(this.userName, this.password)
        .subscribe((data: any) => {
          this.result = {
            success: data.success,
            message: data.message,
            data: {
              token: data.data.token,
            },
          };
          if (this.result.success) {
            this.loginSucess();
          }
        });
    }
  }
  public onEmailValidate() {
    const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
    const regexPattern = emailPattern ? new RegExp(`${emailPattern}`) : null;
    if (regexPattern && regexPattern?.test(this.userName)) {
      this.isEmailErrorMsg = '';
      return true;
    } else {
      this.isEmailErrorMsg = 'Enter validate Email';
      return false;
    }
  }

  public loginSucess() {
    this.router.navigate(['dashboard']);
  }
}
