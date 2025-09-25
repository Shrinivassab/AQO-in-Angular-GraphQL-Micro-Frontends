import { TestBed } from '@angular/core/testing';
import { PatientService } from './patient.service';
import { OrchestratorService } from '../orchestrator/orchestrator.service';
import { ApolloTestingModule } from 'apollo-angular/testing'; // Mocks Apollo
import { HttpClientTestingModule } from '@angular/common/http/testing'; // If needed

// Mock OrchestratorService if necessary, or let it be injected
describe('PatientService', () => {
  let service: PatientService;

  beforeEach(() => {
    // ✅ MUST be at the top — no TestBed calls before this!
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,         // Provides mocked Apollo
        HttpClientTestingModule      // Helps with HTTP under the hood
      ],
      providers: [
        PatientService,
        OrchestratorService          // Provide it unless you want to mock
      ]
    });

    // ✅ Now get the service
    service = TestBed.inject(PatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});