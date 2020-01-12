import { TestBed } from '@angular/core/testing';

import { AlbunService } from './albun.service';

describe('AlbunService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbunService = TestBed.get(AlbunService);
    expect(service).toBeTruthy();
  });
});
