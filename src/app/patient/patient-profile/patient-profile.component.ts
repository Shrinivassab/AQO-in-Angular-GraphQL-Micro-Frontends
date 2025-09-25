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
  currentUser$: Observable<any> | undefined;

  constructor(private patientService: PatientService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeData$ = this.route.data.pipe(
      tap((data) => console.log('Route Data:', data)),
      map((data) => ({
        user: data['user'], // Extract prefetched 'user'
        currentUser: data['currentUser'], // Extract prefetched 'currentUser'
      }))
    );

    this.user$ = routeData$.pipe(
      map((data) => data.user), // Extract the `user` field
      switchMap((prefetchedData) => {
        if (prefetchedData) {
          return of(prefetchedData); // Use prefetched data
        }
        return this.patientService.getPatient('1'); // Fetch dynamically if no prefetched data
      })
    );

    this.currentUser$ = routeData$.pipe(map((data) => data.currentUser)); // Extract the `currentUser` field
  }
}