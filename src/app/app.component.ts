import { Component } from '@angular/core';
import { GeradoresTop5Component } from './components/geradores/geradores.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GeradoresTop5Component],
  template: `
    <main class="container">
      <h1>Top 5 maiores geradores do brasil</h1>
      <app-geradores-top5 />
    </main>
  `,
  styles: `
    .container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
    h1 {
      color: #333;
      margin-bottom: 1.5rem;
    }
  `,
})
export class AppComponent {}
