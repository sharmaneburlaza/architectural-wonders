import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchValue: any;

  constructor(
    private router: Router, 
    private sharedService: SharedService
  ) {}

  onChange(value: Event) {
    this.router.navigate(['/search']);
    console.log(value)
    this.emitEvent(value);
  }

  emitEvent(value: any) {
    this.sharedService.emitCustomEvent(value);
  }
}
