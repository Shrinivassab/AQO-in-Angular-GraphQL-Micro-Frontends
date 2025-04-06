// src/app/schedule/appointment-list/appointment-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleService } from '../../services/schedule.service';
import { Get_AppointmentsQuery } from '../../gql/operations';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent implements OnInit {
  appointments$: Observable<Get_AppointmentsQuery> | undefined; // Use the generated type

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit() {
    this.appointments$ = this.scheduleService.getAppointments();
  }
}