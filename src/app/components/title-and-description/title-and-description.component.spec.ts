import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAndDescriptionComponent } from './title-and-description.component';

describe('TitleAndDescriptionComponent', () => {
  let component: TitleAndDescriptionComponent;
  let fixture: ComponentFixture<TitleAndDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleAndDescriptionComponent]
    });
    fixture = TestBed.createComponent(TitleAndDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
