import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoPulsante } from './evento-pulsante';

describe('EventoPulsante', () => {
  let component: EventoPulsante;
  let fixture: ComponentFixture<EventoPulsante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoPulsante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoPulsante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
