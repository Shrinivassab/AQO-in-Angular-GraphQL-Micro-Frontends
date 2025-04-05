const { gql } = require('apollo-server');

const typeDefs = gql`
  type Patient {
    id: ID!
    name: String!
    age: Int!
    medicalHistory: [String!]!
  }

  type Appointment {
    id: ID!
    date: String!
    doctor: String!
  }

  type Query {
    currentUser: Patient!
    getPatient(id: ID!): Patient
    getAppointments: [Appointment!]!
  }
`;

module.exports = typeDefs;