import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductCommandListComponent } from './product-command-list.component';
import { ProductCommandService } from '../product-command.service';
describe('ProductCommandListComponent', () => {
  let component: ProductCommandListComponent;
  let fixture: ComponentFixture<ProductCommandListComponent>;
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCommandListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ProductCommandService]
    })
      .compileComponents();
  }));
beforeEach(() => {
    fixture = TestBed.createComponent(ProductCommandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should create', () => {
    expect(component).toBeTruthy();
  });
});
