import { TestBed } from '@angular/core/testing';

import { DynamicLibService } from './dynamic-lib.service';

describe('DynamicLibService', () => {
  let service: DynamicLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
