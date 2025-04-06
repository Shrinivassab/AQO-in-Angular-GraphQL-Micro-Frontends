// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PatientModule } from './patient/patient.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ApolloModule } from './apollo/apollo.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    PatientModule,
    ScheduleModule,
    AnalyticsModule,
    ApolloModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}