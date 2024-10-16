import { Component, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
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
