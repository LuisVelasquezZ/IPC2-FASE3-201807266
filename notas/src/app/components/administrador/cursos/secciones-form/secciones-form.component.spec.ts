import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionesFormComponent } from './secciones-form.component';

describe('SeccionesFormComponent', () => {
  let component: SeccionesFormComponent;
  let fixture: ComponentFixture<SeccionesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
