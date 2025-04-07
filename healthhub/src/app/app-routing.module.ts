// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientProfileComponent } from './patient/patient-profile/patient-profile.component';
import { DataResolver } from './resolvers/data.resolver';

const routes: Routes = [
  {
    path: 'patient/:id', // Dynamic route for patient ID
    component: PatientProfileComponent,
    resolve: { user: DataResolver }, // Prefetch data using the resolver
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}