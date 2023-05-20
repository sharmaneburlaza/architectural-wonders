import { Component } from '@angular/core';
import { ARCH_DATA } from '../shared/data';
import { ArchDataModel } from '../shared/models';
import { groupData } from '../shared/utils-helper';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent {
  archData: ArchDataModel[] = [];
  group!: any;

  constructor() {}

  ngOnInit() {
    this.archData = ARCH_DATA.sort((a, b) => a.id - b.id);
    this.group = groupData(this.archData, 'style');
    console.log(this.group)
  }
}
