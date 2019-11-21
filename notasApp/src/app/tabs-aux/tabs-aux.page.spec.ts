import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsAuxPage } from './tabs-aux.page';

describe('TabsAuxPage', () => {
  let component: TabsAuxPage;
  let fixture: ComponentFixture<TabsAuxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsAuxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsAuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
