import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SaleUnitListComponent } from './sale-unit-list.component';
import { SaleUnitService } from '../sale-unit.service';
describe('SaleUnitListComponent', () => {
  let component: SaleUnitListComponent;
  let fixture: ComponentFixture<SaleUnitListComponent>;
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SaleUnitListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers : [SaleUnitService]
    })
      .compileComponents();
  }));
beforeEach(() => {
    fixture = TestBed.createComponent(SaleUnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should create', () => {
    expect(component).toBeTruthy();
  });
});
