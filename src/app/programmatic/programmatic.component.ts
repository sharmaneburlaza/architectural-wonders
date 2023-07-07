import { Component, OnInit } from '@angular/core';
import { ArchDataModel } from '../shared/models';
import { DataService } from '../shared/services/data.service';
import { groupData, sortAlphabetical } from '../shared/utils-helper';

@Component({
  selector: 'app-programmatic',
  templateUrl: './programmatic.component.html',
  styleUrls: ['./programmatic.component.scss']
})
export class ProgrammaticComponent implements OnInit {
  archData: ArchDataModel[] = [];
  groups: any;

  constructor( private dataService: DataService ) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.archData = sortAlphabetical(data, 'buildingType');
      this.groups = groupData(this.archData, 'buildingType');
    })
  }
}
