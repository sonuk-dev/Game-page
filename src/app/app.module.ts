import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthModule } from "./auth/auth.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from "@angular/material/button";
import { DashboardModule } from "./dashboard/dashboard.module";
import { UsersListModule } from "./users-list/users-list.module";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DashboardModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    BrowserAnimationsModule,
    MatSliderModule,
    UsersListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
