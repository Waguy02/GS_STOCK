import { TestBed } from '@angular/core/testing';
import { ProductCommandUnitService } from './product-command-unit.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('ProductCommandUnitService', () => {
  let service: ProductCommandUnitService;
  let httpMock: HttpTestingController;
beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductCommandUnitService]
    });
service = TestBed.get(ProductCommandUnitService);
    httpMock = TestBed.get(HttpTestingController);
  });
it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
