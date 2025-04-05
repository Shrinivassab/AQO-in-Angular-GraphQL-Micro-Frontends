const { ApolloServer, gql } = require('apollo-server');
const { faker } = require('@faker-js/faker'); 
const typeDefs = require('./schema/typeDefs');


const generateMockPatient = () => ({
  id: faker.string.uuid(), 
  name: faker.person.fullName(), 
  age: faker.number.int({ min: 18, max: 90 }), 
  medicalHistory: Array(3).fill(null).map(() => faker.lorem.sentence()),
});

const generateMockAppointments = () => 
  Array(3).fill(null).map(() => ({
    id: faker.string.uuid(), 
    date: faker.date.future().toISOString(),
    doctor: faker.person.fullName(), 
  }));


const resolvers = {
  Query: {
    currentUser: () => generateMockPatient(),
    getPatient: (_, { id }) => ({ ...generateMockPatient(), id }),
    getAppointments: () => generateMockAppointments(),
  },
};


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 GraphQL Mock Server ready at ${url}`);
});