import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliaresComponent } from './auxiliares.component';

describe('AuxiliaresComponent', () => {
  let component: AuxiliaresComponent;
  let fixture: ComponentFixture<AuxiliaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxiliaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
