import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBuildComponent } from './full-build.component';

describe('FullBuildComponent', () => {
  let component: FullBuildComponent;
  let fixture: ComponentFixture<FullBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
