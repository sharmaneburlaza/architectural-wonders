import { Component } from '@angular/core';
import { ARCH_DATA } from '../shared/data';
import { ArchDataModel } from '../shared/models';
import { groupData, sortAlphabetical } from '../shared/utils-helper';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  archData: ArchDataModel[] = [];
  groups!: any;

  constructor() {}

  ngOnInit() {
    this.archData = sortAlphabetical(ARCH_DATA, 'continent');
    this.groups = groupData(this.archData, 'continent');
    console.log(this.groups)
  }
}
