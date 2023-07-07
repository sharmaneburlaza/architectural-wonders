import { Component, OnInit } from '@angular/core';
import { ArchDataModel } from '../shared/models';
import { DataService } from '../shared/services/data.service';
import { groupData } from '../shared/utils-helper';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {
  archData: ArchDataModel[] = [];
  groups: any;

  constructor( private dataService: DataService ) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.archData = Object.values(data);
      this.groups = groupData(this.archData, 'style');
    })
  }
}
