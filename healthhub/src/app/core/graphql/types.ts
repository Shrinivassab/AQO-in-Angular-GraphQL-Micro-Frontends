export interface Patient {
    id: string;
    name: string;
    age: number;
    medicalHistory?: string[];
  }
  
  export interface GetCurrentUserResponse {
    data: {
      currentUser: Patient;
    };
  }