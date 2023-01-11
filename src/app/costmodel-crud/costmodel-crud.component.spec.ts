import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostmodelCRUDComponent } from './costmodel-crud.component';

describe('CostmodelCRUDComponent', () => {
  let component: CostmodelCRUDComponent;
  let fixture: ComponentFixture<CostmodelCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostmodelCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostmodelCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
