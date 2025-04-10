// src/app/resolvers/data.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { OrchestratorService } from '../orchestrator/orchestrator.service';
import { Get_Patient, Get_PatientQueryVariables } from '../gql/operations';

@Injectable({
  providedIn: 'root',
})
export class DataResolver implements Resolve<any> {
  constructor(private orchestrator: OrchestratorService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const patientId = route.paramMap.get('id') || '1'; // Default to '1' if no ID is provided
    return this.orchestrator.fetchQueries([
      {
        query: Get_Patient,
        variables: { id: patientId } as Get_PatientQueryVariables,
      },
    ]).pipe(
      map((results) => results[0]?.getPatient), // Emit the unwrapped 'getPatient' object
      tap((data) => console.log('Resolver Output:', data)) // Log the resolver output
    );
  }
}