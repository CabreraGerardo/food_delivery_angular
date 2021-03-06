import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCircleComponent } from './category-circle.component';

describe('CategoryCircleComponent', () => {
  let component: CategoryCircleComponent;
  let fixture: ComponentFixture<CategoryCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
