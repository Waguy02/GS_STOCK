import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductCommandUnitListComponent } from './product-command-unit-list.component';
import { ProductCommandUnitService } from '../product-command-unit.service';
describe('ProductCommandUnitListComponent', () => {
  let component: ProductCommandUnitListComponent;
  let fixture: ComponentFixture<ProductCommandUnitListComponent>;
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCommandUnitListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ProductCommandUnitService]
    })
      .compileComponents();
  }));
beforeEach(() => {
    fixture = TestBed.createComponent(ProductCommandUnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should create', () => {
    expect(component).toBeTruthy();
  });
});
