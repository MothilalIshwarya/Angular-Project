import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitfactorlistComponent } from './unitfactorlist.component';

describe('UnitfactorlistComponent', () => {
  let component: UnitfactorlistComponent;
  let fixture: ComponentFixture<UnitfactorlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitfactorlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitfactorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
