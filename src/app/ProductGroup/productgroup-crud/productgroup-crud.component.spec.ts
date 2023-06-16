import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductgroupCrudComponent } from './productgroup-crud.component';

describe('ProductgroupCrudComponent', () => {
  let component: ProductgroupCrudComponent;
  let fixture: ComponentFixture<ProductgroupCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductgroupCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductgroupCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
