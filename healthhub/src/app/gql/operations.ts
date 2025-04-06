import { gql } from "apollo-angular";

// Generated query
export const GET_APPOINTMENTS = gql`
  query GetAppointments {
    getAppointments {
      id
      time
      doctor
    }
  }
`;

// Generated type for the query result
export interface GetAppointmentsQuery {
  getAppointments: Array<{
    id: string;
    time: string;
    doctor: string;
  }>;
}