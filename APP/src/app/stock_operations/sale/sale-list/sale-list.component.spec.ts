import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SaleListComponent } from './sale-list.component';
import { SaleService } from '../sale.service';
describe('SaleListComponent', () => {
  let component: SaleListComponent;
  let fixture: ComponentFixture<SaleListComponent>;
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SaleListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers : [SaleService]
    })
      .compileComponents();
  }));
beforeEach(() => {
    fixture = TestBed.createComponent(SaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should create', () => {
    expect(component).toBeTruthy();
  });
});
