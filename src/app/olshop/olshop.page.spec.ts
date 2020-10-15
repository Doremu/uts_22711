import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OlshopPage } from './olshop.page';

describe('OlshopPage', () => {
  let component: OlshopPage;
  let fixture: ComponentFixture<OlshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlshopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OlshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
