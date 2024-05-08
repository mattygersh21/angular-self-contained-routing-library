import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalCompRoutingLibComponent } from './internal-comp-routing-lib.component';

describe('InternalCompRoutingLibComponent', () => {
  let component: InternalCompRoutingLibComponent;
  let fixture: ComponentFixture<InternalCompRoutingLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalCompRoutingLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalCompRoutingLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
