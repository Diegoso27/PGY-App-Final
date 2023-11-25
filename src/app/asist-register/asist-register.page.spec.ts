import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AsistRegisterPage } from './asist-register.page';

describe('AsistRegisterPage', () => {
  let component: AsistRegisterPage;
  let fixture: ComponentFixture<AsistRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsistRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
