import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArchDataModel } from '../shared/models';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  archDetail: ArchDataModel | undefined;
  rawData: ArchDataModel[] = []

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  async ngOnInit() {
    await this.getData();
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.archDetail = this.rawData.find(d => d.id === id);
  }

  getData(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.dataService.getData().subscribe(data => {
        this.rawData = Object.values(data);
        resolve();
      }, error => {
        reject(error);
      });
    });
  }
}
