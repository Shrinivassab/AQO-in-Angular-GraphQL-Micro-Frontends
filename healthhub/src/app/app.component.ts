import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Get_Appointments } from './gql/operations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'healthhub';

  // In any component
constructor(private apollo: Apollo) {
  console.log('Apollo initialized!');
}

  testApollo() {
    this.apollo.query({
      query: Get_Appointments // Replace with your actual query
    }).subscribe(console.log);
  }
}
