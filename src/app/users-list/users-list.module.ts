import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    UsersListComponent
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
