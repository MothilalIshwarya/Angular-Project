import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductgrouplistComponent } from './productgrouplist.component';

describe('ProductgrouplistComponent', () => {
  let component: ProductgrouplistComponent;
  let fixture: ComponentFixture<ProductgrouplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductgrouplistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductgrouplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
