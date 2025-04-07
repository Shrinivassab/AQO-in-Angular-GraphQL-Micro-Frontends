// src/app/schedule/appointment-list/appointment-list.component.ts
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent implements OnInit {
  appointments$: Observable<any> | undefined;
  currentUser$: Observable<any> | undefined;

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    const data$ = this.scheduleService.getAppointments();
    this.appointments$ = data$.pipe(map((data) => data[0].getAppointments));
    this.currentUser$ = data$.pipe(map((data) => data[0].currentUser));
  }
}