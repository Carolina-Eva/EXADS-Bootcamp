import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movies01Component } from './movies01.component';

describe('Movies01Component', () => {
  let component: Movies01Component;
  let fixture: ComponentFixture<Movies01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Movies01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movies01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
