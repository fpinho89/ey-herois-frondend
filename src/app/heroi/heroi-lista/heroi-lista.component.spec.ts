import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiListaComponent } from './heroi-lista.component';

describe('HeroiListaComponent', () => {
  let component: HeroiListaComponent;
  let fixture: ComponentFixture<HeroiListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroiListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroiListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
