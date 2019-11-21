import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursosAuxPage } from './cursos-aux.page';

describe('CursosAuxPage', () => {
  let component: CursosAuxPage;
  let fixture: ComponentFixture<CursosAuxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosAuxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursosAuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
