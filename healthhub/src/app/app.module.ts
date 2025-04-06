// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Required for Apollo
import { AppComponent } from './app.component';
import { PatientModule } from './patient/patient.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ApolloModule } from './apollo/apollo.module'; // Import ApolloModule
import { Apollo } from 'apollo-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule, // Must come before ApolloModule
    ApolloModule, // Ensure this is imported
    PatientModule,
    ScheduleModule,
    AnalyticsModule,
  ],
  providers: [Apollo], // Explicitly provide Apollo
  bootstrap: [AppComponent],
})
export class AppModule {}