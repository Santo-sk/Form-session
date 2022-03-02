import { TestBed } from '@angular/core/testing';

import { MatMessageService } from './mat-message.service';

describe('MatMessageService', () => {
  let service: MatMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
