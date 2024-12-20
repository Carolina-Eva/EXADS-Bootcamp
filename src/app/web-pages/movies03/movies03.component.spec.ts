import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movies03Component } from './movies03.component';

describe('Movies03Component', () => {
  let component: Movies03Component;
  let fixture: ComponentFixture<Movies03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Movies03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movies03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
