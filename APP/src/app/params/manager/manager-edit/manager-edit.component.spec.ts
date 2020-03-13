import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ManagerEditComponent } from './manager-edit.component';
import { ManagerService } from '../manager.service';
describe('ManagerEditComponent', () => {
  let component: ManagerEditComponent;
  let fixture: ComponentFixture<ManagerEditComponent>;
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ManagerService]
    })
      .compileComponents();
  }));
beforeEach(() => {
    fixture = TestBed.createComponent(ManagerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should create', () => {
    expect(component).toBeTruthy();
  });
});
