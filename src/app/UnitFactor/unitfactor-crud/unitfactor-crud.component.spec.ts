import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitfactorCrudComponent } from './unitfactor-crud.component';

describe('UnitfactorCrudComponent', () => {
  let component: UnitfactorCrudComponent;
  let fixture: ComponentFixture<UnitfactorCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitfactorCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitfactorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
