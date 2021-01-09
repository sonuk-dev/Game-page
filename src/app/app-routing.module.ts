import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashbordComponent } from "./dashbord/dashbord.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
//   {
//   path: 'dashbord',
//   component: DashbordComponent,
//   canActivate: [AuthGuard],
// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
