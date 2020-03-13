import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCommandPrintComponent } from './product-command-print.component';

describe('ProductCommandPrintComponent', () => {
  let component: ProductCommandPrintComponent;
  let fixture: ComponentFixture<ProductCommandPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCommandPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCommandPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
