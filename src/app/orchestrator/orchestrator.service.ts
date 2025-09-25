// src/app/orchestrator/orchestrator.service.ts
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable, forkJoin, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrchestratorService {
  private cache: Map<string, any> = new Map();

  constructor(private apollo: Apollo) {}

  fetchQueries(queries: { query: DocumentNode; variables?: any }[]): Observable<any[]> {
    const uniqueQueries = this.deduplicateQueries(queries);

    const observables = uniqueQueries.map((queryObj) => {
      const key = JSON.stringify(queryObj.query.loc?.source.body) + JSON.stringify(queryObj.variables || {});
      if (this.cache.has(key)) {
        return of(this.cache.get(key)); // Return cached result
      }

      return this.apollo.query({ query: queryObj.query, variables: queryObj.variables }).pipe(
        tap((response) => {
          this.cache.set(key, response); // Cache the result
        })
      );
    });

    return forkJoin(observables).pipe(
      map((results) => results.map((res) => res.data))
    );
  }

  private deduplicateQueries(
    queries: { query: DocumentNode; variables?: any }[]
  ): { query: DocumentNode; variables?: any }[] {
    const queryMap = new Map<string, { query: DocumentNode; variables?: any }>();
    queries.forEach((queryObj) => {
      const queryKey = JSON.stringify(queryObj.query.loc?.source.body) + JSON.stringify(queryObj.variables || {});
      if (!queryMap.has(queryKey)) {
        queryMap.set(queryKey, queryObj);
      }
    });
    return Array.from(queryMap.values());
  }
}