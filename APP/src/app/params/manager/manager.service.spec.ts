import { TestBed } from '@angular/core/testing';
import { ManagerService } from './manager.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('ManagerService', () => {
  let service: ManagerService;
  let httpMock: HttpTestingController;
beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ManagerService]
    });
service = TestBed.get(ManagerService);
    httpMock = TestBed.get(HttpTestingController);
  });
it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
