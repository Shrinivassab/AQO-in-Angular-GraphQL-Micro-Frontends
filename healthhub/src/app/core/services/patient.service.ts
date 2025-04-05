// src/core/services/patient.service.ts
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';

@Injectable({
  providedIn: 'root', // Ensure the service is provided in the root injector
})
export class PatientService {
  constructor(private apollo: Apollo) {}

  getCurrentUser() {
    return this.apollo.query({
      query: gql`
        query GetCurrentUser {
          currentUser {
            id
            name
            age
          }
        }
      `,
    });
  }
}