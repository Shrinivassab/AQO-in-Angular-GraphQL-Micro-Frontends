// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

export const routes: Routes = [
  { path: '', component: PatientProfileComponent }, // Default route
  { path: 'patient', component: PatientProfileComponent }, // Example route
  { path: '**', redirectTo: '' }, // Catch-all route
];