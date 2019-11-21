import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAuxComponent } from './cursos-aux.component';

describe('CursosAuxComponent', () => {
  let component: CursosAuxComponent;
  let fixture: ComponentFixture<CursosAuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosAuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
