import { TestBed } from '@angular/core/testing';
import { ClassProductService } from './class-product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('ClassProductService', () => {
  let service: ClassProductService;
  let httpMock: HttpTestingController;
beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClassProductService]
    });
service = TestBed.get(ClassProductService);
    httpMock = TestBed.get(HttpTestingController);
  });
it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
