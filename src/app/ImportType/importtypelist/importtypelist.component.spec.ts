import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporttypelistComponent } from './importtypelist.component';

describe('ImporttypelistComponent', () => {
  let component: ImporttypelistComponent;
  let fixture: ComponentFixture<ImporttypelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImporttypelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImporttypelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
