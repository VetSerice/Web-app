import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVetoComponent } from './register-veto.component';

describe('RegisterVetoComponent', () => {
  let component: RegisterVetoComponent;
  let fixture: ComponentFixture<RegisterVetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterVetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
