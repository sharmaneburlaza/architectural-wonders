import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ARCH_DATA } from '../shared/data';
import { ArchDataModel } from '../shared/models';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchResults: ArchDataModel[] = [];
  archData: ArchDataModel[] = ARCH_DATA;

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    this.sharedService.customEvent$.subscribe((data) => {
      this.performSearch(data);
    });
  }

  performSearch(query: any) {
    if (!query) {
      this.searchResults = [];
      return;
    }

    this.searchResults = this.archData.filter(item => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  onClick(event: Event, item: any) {
    this.router.navigate(['/detail/' + item.id]);
  }
}
