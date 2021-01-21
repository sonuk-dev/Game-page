import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { MatIconModule } from '@angular/material/icon';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    MatIconModule
  ],
  exports: [
    UsersListComponent,
    MatIconModule
  ]
})
export class UsersListModule { }
