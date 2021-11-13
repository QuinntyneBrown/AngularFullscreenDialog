import { TestBed } from '@angular/core/testing';

import { HtmlElementService } from './html-element.service';

describe('HtmlElementService', () => {
  let service: HtmlElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
