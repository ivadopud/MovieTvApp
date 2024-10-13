import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

  onTabChanged(event: any) {
    if (event.index === 0) {
      this.router.navigate(['/tv-shows']);
    } else if (event.index === 1) {
      this.router.navigate(['/movies']);
    }
  }
}
