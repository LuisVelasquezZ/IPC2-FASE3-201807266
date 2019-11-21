import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionAlumnoComponent } from './asignacion-alumno.component';

describe('AsignacionAlumnoComponent', () => {
  let component: AsignacionAlumnoComponent;
  let fixture: ComponentFixture<AsignacionAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
