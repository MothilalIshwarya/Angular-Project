import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitdefinitionCrudComponent } from './unitdefinition-crud.component';

describe('UnitdefinitionCrudComponent', () => {
  let component: UnitdefinitionCrudComponent;
  let fixture: ComponentFixture<UnitdefinitionCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitdefinitionCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitdefinitionCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
