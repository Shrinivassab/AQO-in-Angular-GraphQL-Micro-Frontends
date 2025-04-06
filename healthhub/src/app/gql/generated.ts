import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Appointment = {
  __typename?: 'Appointment';
  doctor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  time: Scalars['String']['output'];
};

export type Patient = {
  __typename?: 'Patient';
  dob: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAppointments?: Maybe<Array<Maybe<Appointment>>>;
  getPatient?: Maybe<Patient>;
};


export type QueryGetPatientArgs = {
  id: Scalars['ID']['input'];
};

export type GetPatientQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPatientQuery = { __typename?: 'Query', getPatient?: { __typename?: 'Patient', id: string, name: string, dob: string } | null };

export type GetAppointmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAppointmentsQuery = { __typename?: 'Query', getAppointments?: Array<{ __typename?: 'Appointment', id: string, time: string, doctor: string } | null> | null };

export const GetPatientDocument = gql`
    query GetPatient($id: ID!) {
  getPatient(id: $id) {
    id
    name
    dob
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPatientGQL extends Apollo.Query<GetPatientQuery, GetPatientQueryVariables> {
    override document = GetPatientDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAppointmentsDocument = gql`
    query GetAppointments {
  getAppointments {
    id
    time
    doctor
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAppointmentsGQL extends Apollo.Query<GetAppointmentsQuery, GetAppointmentsQueryVariables> {
    override document = GetAppointmentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }