import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationServiceComponent } from './formation-service.component';

describe('DevServiceComponent', () => {
  let component: FormationServiceComponent;
  let fixture: ComponentFixture<FormationServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormationServiceComponent]
    });
    fixture = TestBed.createComponent(FormationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
