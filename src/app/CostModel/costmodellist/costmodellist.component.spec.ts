import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostmodellistComponent } from './costmodellist.component';

describe('CostmodellistComponent', () => {
  let component: CostmodellistComponent;
  let fixture: ComponentFixture<CostmodellistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostmodellistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostmodellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
