import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClassProductListComponent } from './class-product-list.component';
import { ClassProductService } from '../class-product.service';
describe('ClassProductListComponent', () => {
  let component: ClassProductListComponent;
  let fixture: ComponentFixture<ClassProductListComponent>;
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassProductListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ClassProductService]
    })
      .compileComponents();
  }));
beforeEach(() => {
    fixture = TestBed.createComponent(ClassProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should create', () => {
    expect(component).toBeTruthy();
  });
});
