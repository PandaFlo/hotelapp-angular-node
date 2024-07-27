import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeCard2Component } from './large-card2.component';

describe('LargeCard2Component', () => {
  let component: LargeCard2Component;
  let fixture: ComponentFixture<LargeCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LargeCard2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargeCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
