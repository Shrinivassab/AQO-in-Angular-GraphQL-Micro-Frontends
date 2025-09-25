import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'; // Required for common directives
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule, // Ensures *ngIf, bindings, etc. work in template
        RouterModule.forRoot([]) // Mock routing
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'healthhub'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('healthhub');
  });

  it('should render title "HealthHub Dashboard" inside .content span', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Trigger change detection

    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('.content span');

    // Debug: Uncomment below if test still fails
    // console.log('Rendered HTML:', compiled.innerHTML);

    expect(titleElement).withContext('The element with selector ".content span" should exist').not.toBeNull();
    expect(titleElement?.textContent)
      .withContext('The title element should contain text')
      .toContain('HealthHub Dashboard');
  });
});