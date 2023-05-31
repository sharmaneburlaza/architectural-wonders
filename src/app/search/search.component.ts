import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  eventData: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.customEvent$.subscribe((data) => {
      this.eventData = data;
    });
  }

}
