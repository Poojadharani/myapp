import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertypeslistComponent } from './usertypeslist.component';

describe('UsertypeslistComponent', () => {
  let component: UsertypeslistComponent;
  let fixture: ComponentFixture<UsertypeslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertypeslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertypeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
