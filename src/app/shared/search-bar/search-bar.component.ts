import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchQuery: any;

  constructor(
    private router: Router, 
    private sharedService: SharedService,
  ) {}

  onChange(query: Event) {
    this.router.navigate(['/search']);
    // console.log(query)
    this.emitEvent(query);
  }

  emitEvent(value: any) {
    this.sharedService.emitCustomEvent(value);
  }

  ngOnDestroy() {
    this.searchQuery = null;
  }
}
