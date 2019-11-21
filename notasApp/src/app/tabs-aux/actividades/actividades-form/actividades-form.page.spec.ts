import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActividadesFormPage } from './actividades-form.page';

describe('ActividadesFormPage', () => {
  let component: ActividadesFormPage;
  let fixture: ComponentFixture<ActividadesFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActividadesFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
