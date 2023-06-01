import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchQuery: any;
  routerSubscription!: Subscription;

  constructor(
    private router: Router, 
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.searchQuery = '';
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  onChange(query: Event) {
    this.router.navigate(['/search']);
    this.emitEvent(query);
  }

  emitEvent(value: any) {
    this.sharedService.emitCustomEvent(value);
  }

}
