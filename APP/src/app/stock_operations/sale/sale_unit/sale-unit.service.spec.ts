import { TestBed } from '@angular/core/testing';
import { SaleUnitService } from './sale-unit.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('SaleUnitService', () => {
  let service: SaleUnitService;
  let httpMock: HttpTestingController;
beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers : [SaleUnitService]
    });
service = TestBed.get(SaleUnitService);
    httpMock = TestBed.get(HttpTestingController);
  });
it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
