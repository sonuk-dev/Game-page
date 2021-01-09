import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { UsersService, User } from "../users.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements AfterViewInit, OnInit {

  constructor(private userService: UsersService) { }
  @ViewChild(MatTable) table: MatTable<User>;
  dataSource;
  length = 0;
  /** Columns displayed in the table. */
  displayedColumns = ['rate', 'nickname', 'email'];
  getTopUsers() {
    this.userService.getTopUsers(0, 14).subscribe(
      (result) => {
        console.log('res', result)
        this.dataSource = result
        console.log(this.dataSource.length)
        length = this.dataSource.length;
        this.table.dataSource = this.dataSource;
      },
    );
  }
  ngOnInit() {


  }
  ngAfterViewInit() {
    this.getTopUsers()
  }

}
