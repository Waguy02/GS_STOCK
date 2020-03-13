import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductCommandUnitEditComponent } from './product-command-unit-edit.component';
import { ProductCommandUnitService } from '../product-command-unit.service';
describe('ProductCommandUnitEditComponent', () => {
  let component: ProductCommandUnitEditComponent;
  let fixture: ComponentFixture<ProductCommandUnitEditComponent>;
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCommandUnitEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ProductCommandUnitService]
    })
      .compileComponents();
  }));
beforeEach(() => {
    fixture = TestBed.createComponent(ProductCommandUnitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should create', () => {
    expect(component).toBeTruthy();
  });
});
