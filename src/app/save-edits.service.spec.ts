import { TestBed } from '@angular/core/testing';

import { SaveEditsService } from './save-edits.service';

describe('SaveEditsService', () => {
  let service: SaveEditsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveEditsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
