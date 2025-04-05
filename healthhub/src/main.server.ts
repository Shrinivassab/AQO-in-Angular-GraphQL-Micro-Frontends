import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
export { renderApplication } from '@angular/platform-server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
