import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bankapp2Component } from './bankapp2.component';

describe('Bankapp2Component', () => {
  let component: Bankapp2Component;
  let fixture: ComponentFixture<Bankapp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bankapp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bankapp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
