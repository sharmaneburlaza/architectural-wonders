import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ArchDataModel } from '../shared/models';
import { DataService } from '../shared/services/data.service';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchResults: ArchDataModel[] = [];
  archData: ArchDataModel[] = [];

  constructor(
    private sharedService: SharedService, 
    private router: Router,
    private dataService: DataService
  ) {}

  async ngOnInit() {
    await this.getData();
    this.sharedService.customEvent$.subscribe((data) => {
      this.performSearch(data);
    });
  }

  getData(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.dataService.getData().subscribe(data => {
        this.archData = Object.values(data);
        resolve();
      }, error => {
        reject(error);
      });
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
