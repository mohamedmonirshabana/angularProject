import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuoFormComponent } from './signuo-form.component';

describe('SignuoFormComponent', () => {
  let component: SignuoFormComponent;
  let fixture: ComponentFixture<SignuoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignuoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
