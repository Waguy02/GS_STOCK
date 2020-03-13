import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SaleUnitEditComponent } from './sale-unit-edit.component';
import { SaleUnitService } from '../sale-unit.service';
describe('SaleUnitEditComponent', () => {
  let component: SaleUnitEditComponent;
  let fixture: ComponentFixture<SaleUnitEditComponent>;
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SaleUnitEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers : [SaleUnitService]
    })
      .compileComponents();
  }));
beforeEach(() => {
    fixture = TestBed.createComponent(SaleUnitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should create', () => {
    expect(component).toBeTruthy();
  });
});
