import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARCH_DATA } from '../shared/data';
import { ArchDataModel } from '../shared/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  archDetail: ArchDataModel | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.archDetail = ARCH_DATA.find(d => d.id === id);
  }
}
