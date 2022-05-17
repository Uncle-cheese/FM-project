import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownScrollerComponent } from './down-scroller.component';

describe('DownScrollerComponent', () => {
  let component: DownScrollerComponent;
  let fixture: ComponentFixture<DownScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownScrollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
