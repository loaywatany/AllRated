import { TestBed } from '@angular/core/testing';

import { GetTrendingInfoService } from './get-trending-info.service';

describe('GetTrendingInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTrendingInfoService = TestBed.get(GetTrendingInfoService);
    expect(service).toBeTruthy();
  });
});
