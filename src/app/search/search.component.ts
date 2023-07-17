import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArchDataModel } from '../shared/models';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchQuery: string = '';
  searchResults: ArchDataModel[] = [];
  archData: ArchDataModel[] = [];

  constructor(
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    await this.getData();
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'];
      this.performSearch(this.searchQuery);
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
