// src/app/patient/patient.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PatientProfileComponent],
  imports: [CommonModule, RouterModule],
  exports: [PatientProfileComponent],
})
export class PatientModule {}