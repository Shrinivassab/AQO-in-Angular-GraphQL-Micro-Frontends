// src/app/patient/patient.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

@NgModule({
  declarations: [PatientProfileComponent],
  imports: [CommonModule],
  exports: [PatientProfileComponent],
})
export class PatientModule {}