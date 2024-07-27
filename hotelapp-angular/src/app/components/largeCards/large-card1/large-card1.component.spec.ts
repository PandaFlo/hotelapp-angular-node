import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeCard1Component } from './large-card1.component';

describe('LargeCard1Component', () => {
  let component: LargeCard1Component;
  let fixture: ComponentFixture<LargeCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LargeCard1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargeCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
