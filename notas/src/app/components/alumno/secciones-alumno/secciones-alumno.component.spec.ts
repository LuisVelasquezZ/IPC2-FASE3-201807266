import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionesAlumnoComponent } from './secciones-alumno.component';

describe('SeccionesAlumnoComponent', () => {
  let component: SeccionesAlumnoComponent;
  let fixture: ComponentFixture<SeccionesAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionesAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionesAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
