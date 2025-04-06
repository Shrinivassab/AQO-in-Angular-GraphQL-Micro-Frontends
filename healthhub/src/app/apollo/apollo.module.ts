// src/app/apollo/apollo.module.ts
import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => ({
        cache: new InMemoryCache(),
        link: httpLink.create({ uri: 'http://localhost:4000/graphql' }), // Ensure this matches your GraphQL endpoint
      }),
      deps: [HttpLink],
    },
  ],
})
export class ApolloModule {}