import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsData } from './products-data';

describe('ProductsData', () => {
  let component: ProductsData;
  let fixture: ComponentFixture<ProductsData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
