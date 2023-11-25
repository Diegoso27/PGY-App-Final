import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RegisterAssitPage } from './register-assit.page';

describe('RegisterAssitPage', () => {
  let component: RegisterAssitPage;
  let fixture: ComponentFixture<RegisterAssitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterAssitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
