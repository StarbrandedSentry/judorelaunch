import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbOrderComponent } from './fb-order.component';

describe('FbOrderComponent', () => {
  let component: FbOrderComponent;
  let fixture: ComponentFixture<FbOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
