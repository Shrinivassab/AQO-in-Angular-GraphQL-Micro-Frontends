// src/app/gql/manual-types.ts
export interface GetPatientQueryVariables {
    id: string;
  }
  
  export interface GetPatientQuery {
    getPatient: {
      id: string;
      name: string;
      dob: string;
    };
  }