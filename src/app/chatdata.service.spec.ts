import { TestBed, inject } from '@angular/core/testing';

import { ChatdataService } from './chatdata.service';

describe('ChatdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatdataService]
    });
  });

  it('should be created', inject([ChatdataService], (service: ChatdataService) => {
    expect(service).toBeTruthy();
  }));
});
