import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClassProductEditComponent } from './class-product-edit.component';
import { ClassProductService } from '../class-product.service';
describe('ClassProductEditComponent', () => {
  let component: ClassProductEditComponent;
  let fixture: ComponentFixture<ClassProductEditComponent>;
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassProductEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ClassProductService]
    })
      .compileComponents();
  }));
beforeEach(() => {
    fixture = TestBed.createComponent(ClassProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should create', () => {
    expect(component).toBeTruthy();
  });
});
