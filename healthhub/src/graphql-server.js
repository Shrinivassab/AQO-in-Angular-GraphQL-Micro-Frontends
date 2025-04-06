// graphql-server.js
const { ApolloServer, gql } = require('apollo-server');

// Define your GraphQL schema
const typeDefs = gql`
  type Patient {
    id: ID!
    name: String!
    dob: String!
  }

  type Appointment {
    id: ID!
    time: String!
    doctor: String!
  }

  type Query {
    getPatient(id: ID!): Patient
    getAppointments: [Appointment]
  }
`;

// Provide mock resolvers
const resolvers = {
  Query: {
    getPatient: (_, { id }) => ({
      id,
      name: `Patient ${id}`,
      dob: '1990-01-01',
    }),
    getAppointments: () => [
      { id: '1', time: '10:00 AM', doctor: 'Dr. Smith' },
      { id: '2', time: '11:00 AM', doctor: 'Dr. Johnson' },
    ],
  },
};

// Start the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`GraphQL server ready at ${url}`);
});