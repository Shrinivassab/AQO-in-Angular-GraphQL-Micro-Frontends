import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_APPOINTMENTS, GetAppointmentsQuery } from '../gql/operations';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  // In any component
constructor(private apollo: Apollo) {
  console.log('Apollo Version:', this.apollo.client.version);
}

  getAppointments() {
    return this.apollo
      .query<GetAppointmentsQuery>({ query: GET_APPOINTMENTS })
      .pipe(map((result) => result.data)); // Extract the `data` property
  }
}