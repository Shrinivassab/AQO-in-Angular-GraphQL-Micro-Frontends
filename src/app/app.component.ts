import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Get_Appointments } from './gql/operations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'healthhub';
  constructor(private router: Router) {}

  navigateToPatientProfile() {
    this.router.navigate(['/patient', '1']); // Navigate to /patient/1
  }

  navigateToAppointments() {
    this.router.navigate(['/appointments']);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
