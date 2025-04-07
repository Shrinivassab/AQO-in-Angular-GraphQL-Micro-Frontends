// src/app/patient/patient-profile/patient-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { PatientService } from '../../services/patient.service';
import { Get_PatientQuery } from '../../gql/operations';

@Component({
  selector: 'app-patient-profile',
  standalone: false,
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss'],
})
export class PatientProfileComponent implements OnInit {
  user$: Observable<any> | undefined;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.user$ = this.patientService.getPatient('1236').pipe(
      tap((response) => console.log('Raw Apollo Response:', response)), // Log the raw response
      map((result: Get_PatientQuery) => result.data?.getPatient)
    );
  }
}