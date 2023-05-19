import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammaticComponent } from './programmatic.component';

describe('ProgrammaticComponent', () => {
  let component: ProgrammaticComponent;
  let fixture: ComponentFixture<ProgrammaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
