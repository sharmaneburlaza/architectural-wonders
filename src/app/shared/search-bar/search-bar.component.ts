import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchQuery: any;

  constructor(
    private router: Router
  ) {}

  onSearch(query: Event) {
    this.router.navigate(['/search'], {queryParams: {q: this.searchQuery}});
  }

}
