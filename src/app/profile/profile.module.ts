import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MatIconModule } from '@angular/material/icon';
import { EditComponent } from './edit/edit.component';
import { MatButtonModule } from '@angular/material/button';
import { RateChartModule } from "../rate-chart/rate-chart.module";


@NgModule({
  declarations: [ProfileComponent, EditComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RateChartModule
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class ProfileModule { }
