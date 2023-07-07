import { Component, OnInit } from '@angular/core';
import { ArchDataModel } from '../shared/models';
import { DataService } from '../shared/services/data.service';
import { groupData, sortAlphabetical } from '../shared/utils-helper';

@Component({
  selector: 'app-alphabetical',
  templateUrl: './alphabetical.component.html',
  styleUrls: ['./alphabetical.component.scss']
})
export class AlphabeticalComponent implements OnInit {
  archData: ArchDataModel[] = [];
  groups: any;

  constructor( private dataService: DataService ) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.archData = sortAlphabetical(data, 'name');
      this.groups = groupData(this.archData, 'name');
    })
  }
}
