// src/app/services/patient.service.ts
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private apollo: Apollo) {} // Ensure Apollo is injected

  getPatient(id: string): any {
    const GET_PATIENT = gql`
      query GetPatient($id: ID!) {
        getPatient(id: $id) {
          id
          name
          dob
        }
      }
    `;
    return this.apollo.query<{ getPatient: { id: string; name: string; dob: string } }>({
      query: GET_PATIENT,
      variables: { id },
    });
  }
}