import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any;
  page = 1;
  itemPerPage = 5;
  numberOfUsers: Number;
  numberOfPages: Number;
  constructor(private userService: UsersService, private router: Router) { }

  getNumberOfUsers() {
    this.userService.getAllUsers().subscribe(
      (res: any[]) => { 
        this.numberOfUsers = res.length 
        this.numberOfPages = Math.ceil(res.length / this.itemPerPage);
      }
    );
  }
  getTopUsers() {
    this.userService.getTopUsersPerPage((this.page - 1) * this.itemPerPage, this.itemPerPage).subscribe(
      (res) => { this.users = res }
    );
  }
  nextPage() {
    if (this.page + 1 > this.numberOfPages)
      return;

    this.page++;
    this.getTopUsers()
  }
  previousPage() {
    if (this.page - 1 < 1)
      return;
    
    this.page--;
    this.getTopUsers()
  }
  toPage(user) {
    this.router.navigate(['/usersList/userPage', user]);
  }

  ngOnInit(): void {
    this.getTopUsers()
    this.getNumberOfUsers()
  }
}
