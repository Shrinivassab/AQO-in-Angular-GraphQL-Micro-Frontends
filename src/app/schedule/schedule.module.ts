// src/app/schedule/schedule.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

@NgModule({
  declarations: [AppointmentListComponent],
  imports: [CommonModule],
  exports: [AppointmentListComponent],
})
export class ScheduleModule {}