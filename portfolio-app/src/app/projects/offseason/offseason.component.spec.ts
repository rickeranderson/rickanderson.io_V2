import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffseasonComponent } from './offseason.component';

describe('OffseasonComponent', () => {
  let component: OffseasonComponent;
  let fixture: ComponentFixture<OffseasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffseasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffseasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
