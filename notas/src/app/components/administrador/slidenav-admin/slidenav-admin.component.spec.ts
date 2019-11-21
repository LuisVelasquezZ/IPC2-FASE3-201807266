import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidenavAdminComponent } from './slidenav-admin.component';

describe('SlidenavAdminComponent', () => {
  let component: SlidenavAdminComponent;
  let fixture: ComponentFixture<SlidenavAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidenavAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidenavAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
