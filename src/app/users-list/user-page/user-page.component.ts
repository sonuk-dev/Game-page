import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user:any;
  constructor(private dataRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      nickname: this.dataRoute.snapshot.params['nickname'],
      email: this.dataRoute.snapshot.params['email'],
      bestScore: this.dataRoute.snapshot.params['bestScore'],
      id: this.dataRoute.snapshot.params['_id']
    }
  }

}
