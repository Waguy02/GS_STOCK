import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SaleEditComponent } from './sale-edit.component';
import { SaleService } from '../sale.service';
describe('SaleEditComponent', () => {
  let component: SaleEditComponent;
  let fixture: ComponentFixture<SaleEditComponent>;
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SaleEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers : [SaleService]
    })
      .compileComponents();
  }));
beforeEach(() => {
    fixture = TestBed.createComponent(SaleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should create', () => {
    expect(component).toBeTruthy();
  });
});
