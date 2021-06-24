import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post404Component } from './post404.component';

describe('Post404Component', () => {
  let component: Post404Component;
  let fixture: ComponentFixture<Post404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
