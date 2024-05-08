import { TestBed } from '@angular/core/testing';

import { InternalCompRoutingLibService } from './internal-comp-routing-lib.service';

describe('InternalCompRoutingLibService', () => {
  let service: InternalCompRoutingLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalCompRoutingLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
