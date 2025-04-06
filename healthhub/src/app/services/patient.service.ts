// src/app/services/patient.service.ts
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Get_Patient, Get_PatientQuery, Get_PatientQueryVariables } from '../gql/operations';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private apollo: Apollo) {}

  getPatient(id: string): any {
    return this.apollo.query<Get_PatientQuery>({
      query: Get_Patient, // Use GetPatient
      variables: { id } as Get_PatientQueryVariables,
    });
  }
}