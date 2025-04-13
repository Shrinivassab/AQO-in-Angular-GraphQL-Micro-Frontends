// src/app/services/schedule.service.ts
import { Injectable } from '@angular/core';
import { OrchestratorService } from '../orchestrator/orchestrator.service';
import { Get_Appointments } from '../gql/operations';
import { Observable } from 'rxjs';

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
    ]);
  }
}