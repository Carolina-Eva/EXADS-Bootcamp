import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movies02Component } from './movies02.component';

describe('Movies02Component', () => {
  let component: Movies02Component;
  let fixture: ComponentFixture<Movies02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Movies02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movies02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
