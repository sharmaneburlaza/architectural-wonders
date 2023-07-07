import { Component, OnInit } from '@angular/core';
import { ArchDataModel } from '../shared/models';
import { DataService } from '../shared/services/data.service';
import { groupData, sortAlphabetical } from '../shared/utils-helper';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  archData: ArchDataModel[] = [];
  groups: any;

  constructor( private dataService: DataService ) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.archData = sortAlphabetical(data, 'continent');
      this.groups = groupData(this.archData, 'continent');
    })
  }
}
