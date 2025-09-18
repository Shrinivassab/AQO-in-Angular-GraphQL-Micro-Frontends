// src/app/services/schedule.service.ts
import { Injectable } from '@angular/core';
import { OrchestratorService } from '../orchestrator/orchestrator.service';
import { Get_Appointments, GetCurrentUser } from '../gql/operations';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private orchestrator: OrchestratorService) {}

  getAppointments(): Observable<any> {
    return this.orchestrator.fetchQueries([
      {
        query: Get_Appointments,
        variables: {},
      },
      {
        query: GetCurrentUser,
        variables: {},
      },
    ]).pipe(
      map((results) => ({
        appointments: results[0]?.getAppointments, // Extract appointments
        currentUser: results[1]?.getCurrentUser,   // Extract currentUser
      }))
    );
  }
}