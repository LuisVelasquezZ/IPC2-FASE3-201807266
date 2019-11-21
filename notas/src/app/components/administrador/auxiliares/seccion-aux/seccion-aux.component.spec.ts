import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAuxComponent } from './seccion-aux.component';

describe('SeccionAuxComponent', () => {
  let component: SeccionAuxComponent;
  let fixture: ComponentFixture<SeccionAuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionAuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
