import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNavComponent } from './single-nav.component';

describe('SingleNavComponent', () => {
  let component: SingleNavComponent;
  let fixture: ComponentFixture<SingleNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
