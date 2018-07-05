import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinfoComponent } from './finfo.component';

describe('FinfoComponent', () => {
  let component: FinfoComponent;
  let fixture: ComponentFixture<FinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
