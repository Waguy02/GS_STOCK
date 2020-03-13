import { TestBed } from '@angular/core/testing';
import { ProductCommandService } from './product-command.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('ProductCommandService', () => {
  let service: ProductCommandService;
  let httpMock: HttpTestingController;
beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductCommandService]
    });
service = TestBed.get(ProductCommandService);
    httpMock = TestBed.get(HttpTestingController);
  });
it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
