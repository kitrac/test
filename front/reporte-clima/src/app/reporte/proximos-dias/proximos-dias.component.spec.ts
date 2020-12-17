import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosDiasComponent } from './proximos-dias.component';

describe('ProximosDiasComponent', () => {
  let component: ProximosDiasComponent;
  let fixture: ComponentFixture<ProximosDiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximosDiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximosDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
