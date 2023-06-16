import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporttypeCrudComponent } from './importtype-crud.component';

describe('ImporttypeCrudComponent', () => {
  let component: ImporttypeCrudComponent;
  let fixture: ComponentFixture<ImporttypeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImporttypeCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImporttypeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
