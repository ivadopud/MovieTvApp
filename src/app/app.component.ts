import { Component, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showTabs = signal(true);
  activeTabIndex = signal(0);

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showTabs.set(!(event.urlAfterRedirects.includes('/tv-shows/') || event.urlAfterRedirects.includes('/movies/')));

      if (event.urlAfterRedirects.includes('/tv-shows')) {
        this.activeTabIndex.set(0); 
      } else if (event.urlAfterRedirects.includes('/movies')) {
        this.activeTabIndex.set(1);
      }
    });
  }

  onTabChanged(event: any) {
    this.activeTabIndex.set(event.index);
    if (event.index === 0) {
      this.router.navigate(['/tv-shows']);
    } else if (event.index === 1) {
      this.router.navigate(['/movies']);
    }
  }
}
