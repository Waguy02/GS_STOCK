import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ManagerListComponent } from './manager-list.component';
import { ManagerService } from '../manager.service';
describe('ManagerListComponent', () => {
  let component: ManagerListComponent;
  let fixture: ComponentFixture<ManagerListComponent>;
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ManagerService]
    })
      .compileComponents();
  }));
beforeEach(() => {
    fixture = TestBed.createComponent(ManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should create', () => {
    expect(component).toBeTruthy();
  });
});
