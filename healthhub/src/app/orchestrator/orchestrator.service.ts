// src/app/orchestrator/orchestrator.service.ts
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable, forkJoin, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrchestratorService {
  constructor(private apollo: Apollo) {}

  fetchQueries(queries: { query: DocumentNode; variables?: any }[]): Observable<any> {
    const uniqueQueries = this.deduplicateQueries(queries);
    return this.sendMergedQueries(uniqueQueries);
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

  private sendMergedQueries(
    queries: { query: DocumentNode; variables?: any }[]
  ): Observable<any[]> {
    const observables = queries.map((queryObj) =>
      this.apollo.query({ query: queryObj.query, variables: queryObj.variables })
    );
    return forkJoin(observables).pipe(
      tap((results: any[]) => {
        results.forEach((result: any, index: number) => {
          const key = JSON.stringify(queries[index].query.loc?.source.body) + JSON.stringify(queries[index].variables || {});
          this.cache.set(key, result); // Cache the result
        });
      })
    );
  }

  private cache: Map<string, any> = new Map();
}