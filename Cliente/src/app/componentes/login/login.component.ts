import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login-service/login.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: LoginService,
    private router: Router,
    private location: Location
  ) { }

  private user: any = {
    email: '',
    password: ''
  };
  public isError = false;

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    if (form.valid) {
      return this.authService
        .loginuser(this.user.email, this.user.password)
        .subscribe(data => {
          if (data.length == 0){
            this.onIsError();
          }
          else {
            this.authService.setUser(data[0]);
            const token = data[0].id_administrador;
            this.authService.setToken(token);
            this.router.navigate(['/premios']);
          }
        });
    } else {
      this.onIsError();
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

}
