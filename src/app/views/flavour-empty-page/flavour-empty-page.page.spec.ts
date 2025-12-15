import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlavourEmptyPage } from './flavour-empty-page.page';

describe('FlavourEmptyPagePage', () => {
  let component: FlavourEmptyPage;
  let fixture: ComponentFixture<FlavourEmptyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavourEmptyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
