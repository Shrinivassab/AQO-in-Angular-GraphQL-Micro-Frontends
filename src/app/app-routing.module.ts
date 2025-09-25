// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientProfileComponent } from './patient/patient-profile/patient-profile.component';
import { DataResolver } from './resolvers/data.resolver';
import { AppointmentListComponent } from './schedule/appointment-list/appointment-list.component';
import { DashboardComponent } from './analytics/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'patient/:id', // Dynamic route for patient ID
    component: PatientProfileComponent,
    resolve: { user: DataResolver }, // Prefetch data using the resolver
  },
  {
    path: 'appointments', // Dynamic route for patient ID
    component: AppointmentListComponent,
    resolve: { user: DataResolver }, // Prefetch data using the resolver
  },
  {
    path: 'dashboard', // Dynamic route for patient ID
    component: DashboardComponent,
    resolve: { user: DataResolver }, // Prefetch data using the resolver
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}