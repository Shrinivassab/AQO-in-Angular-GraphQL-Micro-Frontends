// src/patient-profile/patient-profile.component.ts
import { Component } from '@angular/core';
import { PatientService } from '../core/services/patient.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-profile',
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.scss',
})
export class PatientProfileComponent {
  user$: any;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.user$ = this.patientService.getCurrentUser().pipe(
      map((result: any) => result.data?.currentUser)
    );
  }
}