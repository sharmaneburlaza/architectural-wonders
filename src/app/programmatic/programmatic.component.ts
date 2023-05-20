import { Component } from '@angular/core';
import { ARCH_DATA } from '../shared/data';
import { ArchDataModel } from '../shared/models';
import { groupData, sortAlphabetical } from '../shared/utils-helper';

@Component({
  selector: 'app-programmatic',
  templateUrl: './programmatic.component.html',
  styleUrls: ['./programmatic.component.scss']
})
export class ProgrammaticComponent {
  archData: ArchDataModel[] = [];
  groups!: any;

  constructor() {}

  ngOnInit() {
    this.archData = sortAlphabetical(ARCH_DATA, 'buildingType');
    this.groups = groupData(this.archData, 'buildingType');
    console.log(this.groups)
  }
}
