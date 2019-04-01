import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraymethodsComponent } from './arraymethods.component';

describe('ArraymethodsComponent', () => {
  let component: ArraymethodsComponent;
  let fixture: ComponentFixture<ArraymethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraymethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraymethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
