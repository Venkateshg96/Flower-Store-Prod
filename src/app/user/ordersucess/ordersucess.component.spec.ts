import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersucessComponent } from './ordersucess.component';

describe('OrdersucessComponent', () => {
  let component: OrdersucessComponent;
  let fixture: ComponentFixture<OrdersucessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersucessComponent]
    });
    fixture = TestBed.createComponent(OrdersucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
