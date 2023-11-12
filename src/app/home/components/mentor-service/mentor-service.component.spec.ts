import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorServiceComponent } from './mentor-service.component';

describe('DevServiceComponent', () => {
  let component: MentorServiceComponent;
  let fixture: ComponentFixture<MentorServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MentorServiceComponent]
    });
    fixture = TestBed.createComponent(MentorServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
