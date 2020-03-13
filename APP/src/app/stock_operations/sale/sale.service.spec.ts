import { TestBed } from '@angular/core/testing';
import { SaleService } from './sale.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('SaleService', () => {
  let service: SaleService;
  let httpMock: HttpTestingController;
beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers : [SaleService]
    });
service = TestBed.get(SaleService);
    httpMock = TestBed.get(HttpTestingController);
  });
it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
