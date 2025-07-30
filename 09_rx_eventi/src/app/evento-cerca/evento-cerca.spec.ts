import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoCerca } from './evento-cerca';

describe('EventoCerca', () => {
  let component: EventoCerca;
  let fixture: ComponentFixture<EventoCerca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoCerca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoCerca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
