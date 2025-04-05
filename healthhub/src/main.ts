// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Injector, Provider } from '@angular/core';
import { Apollo } from 'apollo-angular';

bootstrapApplication(AppComponent, appConfig).then(appRef => {
  // Get the application injector
  const injector = appRef.injector;
  
  try {
    const apollo = injector.get(Apollo);
    console.log('✅ Apollo is available in DI:', apollo);
  } catch (error) {
    console.error('❌ Apollo is NOT available in DI:', error);
    
    // Debug: List all registered providers
    console.log('Registered providers:', 
      appConfig.providers.map(p => 
        typeof p === 'object' && 'provide' in p ? p.provide : p
      )
    );
  }
}).catch(err => console.error('Bootstrap failed:', err));