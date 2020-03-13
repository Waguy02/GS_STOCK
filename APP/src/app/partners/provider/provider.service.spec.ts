import { TestBed } from '@angular/core/testing';
import { ProviderService } from './provider.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('ProviderService', () => {
  let service: ProviderService;
  let httpMock: HttpTestingController;
beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProviderService]
    });
service = TestBed.get(ProviderService);
    httpMock = TestBed.get(HttpTestingController);
  });
it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
