import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsLoginPage } from './tabs-login.page';

describe('TabsLoginPage', () => {
  let component: TabsLoginPage;
  let fixture: ComponentFixture<TabsLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
