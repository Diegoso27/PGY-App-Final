import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { QrResultPage } from './qr-result.page';

describe('QrResultPage', () => {
  let component: QrResultPage;
  let fixture: ComponentFixture<QrResultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QrResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
