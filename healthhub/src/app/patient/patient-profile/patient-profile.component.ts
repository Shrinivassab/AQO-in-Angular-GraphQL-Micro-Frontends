// src/app/patient/patient-profile/patient-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientService } from '../../services/patient.service';

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
    this.user$ = this.patientService.getPatient('1'); // Fetch patient with ID '1'
  }
}