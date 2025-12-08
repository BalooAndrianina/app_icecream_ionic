import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeIceCreamPage } from './make-ice-cream.page';

describe('MakeIceCreamPage', () => {
  let component: MakeIceCreamPage;
  let fixture: ComponentFixture<MakeIceCreamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeIceCreamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
