// src/app/services/patient.service.ts
import { Injectable } from '@angular/core';
import { OrchestratorService } from '../orchestrator/orchestrator.service';
import { Get_Patient, Get_PatientQueryVariables } from '../gql/operations';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private orchestrator: OrchestratorService) {}

  getPatient(id: string): Observable<any> {
    return this.orchestrator.fetchQueries([
      {
        query: Get_Patient,
        variables: { id } as Get_PatientQueryVariables,
      },
    ]);
  }
}