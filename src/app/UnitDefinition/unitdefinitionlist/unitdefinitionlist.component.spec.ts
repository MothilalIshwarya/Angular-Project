import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitdefinitionlistComponent } from './unitdefinitionlist.component';

describe('UnitdefinitionlistComponent', () => {
  let component: UnitdefinitionlistComponent;
  let fixture: ComponentFixture<UnitdefinitionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitdefinitionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitdefinitionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
