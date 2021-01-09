import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService) { }
  isLoggedIn() {
    return this.authService.isLoggedIn()
  }

  logout() {
    this.authService.logout()
  }
  ngOnInit(): void {
  }
}
