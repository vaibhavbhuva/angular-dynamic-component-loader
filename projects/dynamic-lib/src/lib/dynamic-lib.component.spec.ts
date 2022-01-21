import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLibComponent } from './dynamic-lib.component';

describe('DynamicLibComponent', () => {
  let component: DynamicLibComponent;
  let fixture: ComponentFixture<DynamicLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
