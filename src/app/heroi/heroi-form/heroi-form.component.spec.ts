import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiFormComponent } from './heroi-form.component';

describe('HeroiFormComponent', () => {
  let component: HeroiFormComponent;
  let fixture: ComponentFixture<HeroiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
