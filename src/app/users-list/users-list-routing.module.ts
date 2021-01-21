import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from "./users-list/users-list.component";
import { UserPageComponent } from "./user-page/user-page.component";

const routes: Routes = [
  { path: '', component: UsersListComponent },
  {
    path: 'userPage', component: UserPageComponent, data: {
      nickname: String,
      eamil: String,
      bestScore: Number
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersListRoutingModule { }
