import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesEndComponent } from './movies-end.component';

describe('MoviesEndComponent', () => {
  let component: MoviesEndComponent;
  let fixture: ComponentFixture<MoviesEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesEndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
