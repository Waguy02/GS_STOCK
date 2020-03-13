import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductCommandEditComponent } from './product-command-edit.component';
import { ProductCommandService } from '../product-command.service';
describe('ProductCommandEditComponent', () => {
  let component: ProductCommandEditComponent;
  let fixture: ComponentFixture<ProductCommandEditComponent>;
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCommandEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ProductCommandService]
    })
      .compileComponents();
  }));
beforeEach(() => {
    fixture = TestBed.createComponent(ProductCommandEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should create', () => {
    expect(component).toBeTruthy();
  });
});
