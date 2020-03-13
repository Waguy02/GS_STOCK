import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PaymentListComponent } from './payment-list.component';
import { PaymentService } from '../payment.service';
describe('PaymentListComponent', () => {
  let component: PaymentListComponent;
  let fixture: ComponentFixture<PaymentListComponent>;
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PaymentService]
    })
      .compileComponents();
  }));
beforeEach(() => {
    fixture = TestBed.createComponent(PaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should create', () => {
    expect(component).toBeTruthy();
  });
});
