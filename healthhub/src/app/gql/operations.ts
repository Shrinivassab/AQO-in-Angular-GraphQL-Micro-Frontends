import gql from 'graphql-tag';
import { Exact, Scalars } from './types';
export type Get_PatientQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Get_PatientQuery = { __typename?: 'Query', getPatient?: { __typename?: 'Patient', id: string, name: string, dob: string } | null };

export type Get_AppointmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_AppointmentsQuery = { __typename?: 'Query', getAppointments?: Array<{ __typename?: 'Appointment', id: string, time: string, doctor: string } | null> | null };


export const Get_Patient = gql`
    query GET_PATIENT($id: ID!) {
  getPatient(id: $id) {
    id
    name
    dob
  }
}
    `;
export const Get_Appointments = gql`
    query GET_APPOINTMENTS {
  getAppointments {
    id
    time
    doctor
  }
}
    `;