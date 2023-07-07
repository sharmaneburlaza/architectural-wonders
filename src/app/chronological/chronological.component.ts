import { Component, OnInit } from '@angular/core';
import { ArchDataModel } from '../shared/models';
import { DataService } from '../shared/services/data.service';
import { sortById } from '../shared/utils-helper';

@Component({
  selector: 'app-chronological',
  templateUrl: './chronological.component.html',
  styleUrls: ['./chronological.component.scss']
})
export class ChronologicalComponent implements OnInit {
  rawData: ArchDataModel[] = [];
  archData: ArchDataModel[] = [];
  groups: any;

  constructor( private dataService: DataService ) {}

  async ngOnInit() {
    await this.getData();

    let BC = this.rawData.filter(d => d.yearBuilt[d.yearBuilt.length -1] === 'C');
    let AD = this.rawData.filter(d => d.yearBuilt[d.yearBuilt.length -1] !== 'C');

    AD = sortById(AD).reduce((r: any, a: any) => {
      const yearBuilt = ((a.yearBuilt).split('-')[0]).padStart(4, "0");
      let century = yearBuilt.substring(0, 2) + '00s';
      r[century] = r[century] || [];
      r[century].push(a);
      return r;
    }, Object.create(null));

    let arrGroup: [string, any][] = Object.entries(AD);
    const ar1 = arrGroup[19][1].slice(0, 13);
    const ar2 = arrGroup[19][1].slice(13, 26);
    arrGroup[19] = ["1900s-a", ar1];
    const insertAr = ["1900s-b", ar2];

    let sortedGroup = [...arrGroup, insertAr].sort((a, b) => a[0].localeCompare(b[0]));
    sortedGroup = [["BC", BC], ...sortedGroup];
    this.groups = Object.fromEntries(sortedGroup);
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
