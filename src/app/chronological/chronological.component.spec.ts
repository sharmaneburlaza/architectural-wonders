import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronologicalComponent } from './chronological.component';

describe('ChronologicalComponent', () => {
  let component: ChronologicalComponent;
  let fixture: ComponentFixture<ChronologicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChronologicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChronologicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
