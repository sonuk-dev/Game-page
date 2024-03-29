import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
    ])),
  });
  constructor(private authService: AuthService, private router: Router) { }
  register() {
    if (this.user.status == "INVALID")
      return;
    this.authService.addUser({
      nickname: this.user.get('nickname').value,
      email: this.user.get('email').value,
      password: this.user.get('password').value
    }).subscribe(
      (res: any) => {
        this.serverError.emailDuplicate = false;
        console.log(res.user)
        localStorage.setItem('currentUser', JSON.stringify(res.user));
        localStorage.setItem('token', res.token);
        this.router.navigate(['/game']);
      },
      (err) => {
        // "E11000 duplicate key error collection: Cluster0.users index: email_1 dup key: { email: "email@email" }"
        if (err.error.error.endsWith(`{ email: "${this.user.get('email').value}" }`)) {
          this.serverError.emailDuplicate = true;
        }
        console.log(err)
      },
    );
  }
  ngOnInit(): void {
  }

}
