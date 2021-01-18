import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  currentUser: any;
  editedUser = new FormGroup({
    nickname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email,
    ])),
  });
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.editedUser.controls.email.setValue(this.currentUser.email)
    this.editedUser.controls.nickname.setValue(this.currentUser.nickname)
  }
  getCurrentUser() {
    this.currentUser = this.userService.getCurrentUser();
  }
  updateUser() {
    this.userService.updateUser({
      _id: this.currentUser._id,
      nickname: this.editedUser.get('nickname').value,
      email: this.editedUser.get('email').value
    }).subscribe(
      (res: any) => {
        localStorage.setItem('currentUser', JSON.stringify(res.user));
        localStorage.setItem('token', res.token);
        this.router.navigate(['/profile']);
      }
    );
  }
}
