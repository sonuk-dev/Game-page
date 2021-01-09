import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../form.css']
})
export class LoginComponent implements OnInit {
  hidePassword = true;
  serverError = {
    userNotExist: false,
    wrondPassword: false
  };
  
  user = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email,
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
    ])),
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void { 
    console.log(this.user.get('email'))
  }

  login() {
    if (this.user.status == "INVALID")
      return;
    this.authService.login(this.user.get('email').value, this.user.get('password').value)
      .subscribe(
        (user) => {
          console.log('user', user)
          this.serverError.userNotExist = false;
          this.serverError.wrondPassword = false;
          localStorage.setItem('currentUser', JSON.stringify(user));
        },
        (err) => {
          console.log(err)
          if (JSON.parse(err.error.error).email) {
            this.serverError.userNotExist = true;
          } else if (JSON.parse(err.error.error).password) {
            this.serverError.wrondPassword = true;
          }

        }
      );
  }
}
