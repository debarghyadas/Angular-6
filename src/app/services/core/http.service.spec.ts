import { TestBed, inject } from '@angular/core/testing';
import { HttpProvider } from './http.service';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpProvider]
    });
  });

  it('should be created', inject([HttpProvider], (service: HttpProvider) => {
    expect(service).toBeTruthy();
  }));
});
