import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs';
import { Get_Appointments, Get_AppointmentsQuery } from '../gql/operations';
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
      .query<Get_AppointmentsQuery>({ query: Get_Appointments })
      .pipe(map((result) => result.data)); // Extract the `data` property
  }
}