import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevServiceComponent } from './dev-service.component';

describe('DevServiceComponent', () => {
  let component: DevServiceComponent;
  let fixture: ComponentFixture<DevServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DevServiceComponent]
    });
    fixture = TestBed.createComponent(DevServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
