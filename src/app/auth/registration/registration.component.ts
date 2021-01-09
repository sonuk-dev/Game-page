import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../form.css']
})
export class RegistrationComponent implements OnInit {
  hidePassword = true;
  serverError = {
    emailDuplicate: false
  }
  user = new FormGroup({
    nickname: new FormControl('', Validators.required),
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
  register() {
    if (this.user.status == "INVALID")
      return;
    this.authService.addUser({
      nickname: this.user.get('nickname').value,
      email: this.user.get('email').value,
      password: this.user.get('password').value
    }).subscribe(
      (user) => {
        this.serverError.emailDuplicate = false;
        localStorage.setItem('currentUser', JSON.stringify(user));
      },
      (err) => {
        console.log(err);
        console.log(err.error.error);
        console.log(`{ email: ${this.user.get('email').value} }`)
        // "E11000 duplicate key error collection: Cluster0.users index: email_1 dup key: { email: "email@email" }"
        if (err.error.error.endsWith(`{ email: "${this.user.get('email').value}" }`)) {
          this.serverError.emailDuplicate = true;
        }

      },
    );
  }
  ngOnInit(): void {
  }

}
