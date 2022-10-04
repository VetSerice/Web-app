import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetoSeviceComponent } from './veto-sevice.component';

describe('VetoSeviceComponent', () => {
  let component: VetoSeviceComponent;
  let fixture: ComponentFixture<VetoSeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetoSeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetoSeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
