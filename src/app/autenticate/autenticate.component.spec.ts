import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticateComponent } from './autenticate.component';

describe('AutenticateComponent', () => {
  let component: AutenticateComponent;
  let fixture: ComponentFixture<AutenticateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutenticateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutenticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
