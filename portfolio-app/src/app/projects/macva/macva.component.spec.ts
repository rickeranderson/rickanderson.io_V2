import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacvaComponent } from './macva.component';

describe('MacvaComponent', () => {
  let component: MacvaComponent;
  let fixture: ComponentFixture<MacvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
