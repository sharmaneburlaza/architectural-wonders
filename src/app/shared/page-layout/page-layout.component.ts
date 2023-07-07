import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ArchDataModel } from '../models';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  @Input() archData: any;
  dataArr: any;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.archData) {
      this.dataArr = Object.entries(this.archData)
    }
  }

  onClick(event: Event, item: any) {
    this.router.navigate(['/detail/' + item.id]);
  }

  getDynamicStyle(item: ArchDataModel) {
    const fontColor = this.getColor(item.color);
    return {
      color: fontColor,
      backgroundColor: item.color
    }
  }

  getColor(hexcode: string): string {
    const c = hexcode.substring(1);
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (luma < 100) {
      return 'white';
    } else {
      return 'black';
    }
  }
}
