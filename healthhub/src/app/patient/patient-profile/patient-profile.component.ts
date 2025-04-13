// src/app/patient/patient-profile/patient-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-profile',
  standalone: false,
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss'],
})
export class PatientProfileComponent implements OnInit {
  user$: Observable<any> | undefined;

  constructor(private patientService: PatientService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user$ = this.route.data.pipe(
      tap((data) => console.log('Route Data:', data)),
      map((data) => data['user']),
      tap((prefetchedData) => console.log('Prefetched Data:', prefetchedData)),
      switchMap((prefetchedData) => {
        if (prefetchedData) {
          return of(prefetchedData);
        }
        return this.patientService.getPatient('1');
      }),
      tap((result) => console.log('Apollo Response:', result)),
      // Update this mapping to properly extract the patient data
      map((result) => {
        // If using prefetched data, it might already be the patient object
        if (result?.data?.getPatient) {
          return result.data.getPatient;
        }
        // If it's the first item in an array with data.getPatient
        if (Array.isArray(result) && result[0]?.data?.getPatient) {
          return result[0].data.getPatient;
        }
        // Fallback to return whatever we have
        return result;
      })
    );
  }
}