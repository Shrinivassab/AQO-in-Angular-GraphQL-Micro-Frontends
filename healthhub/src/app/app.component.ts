// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PatientProfileComponent], // Add RouterOutlet here
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'healthhub';
}