import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDasboardComponent } from './contacts-dasboard.component';

describe('ContactsDasboardComponent', () => {
  let component: ContactsDasboardComponent;
  let fixture: ComponentFixture<ContactsDasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsDasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
