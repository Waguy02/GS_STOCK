import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProviderListComponent } from './provider-list.component';
import { ProviderService } from '../provider.service';
describe('ProviderListComponent', () => {
  let component: ProviderListComponent;
  let fixture: ComponentFixture<ProviderListComponent>;
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ProviderService]
    })
      .compileComponents();
  }));
beforeEach(() => {
    fixture = TestBed.createComponent(ProviderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should create', () => {
    expect(component).toBeTruthy();
  });
});
