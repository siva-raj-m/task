import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZynerdLoginComponent } from './zynerd-login.component';

describe('ZynerdLoginComponent', () => {
  let component: ZynerdLoginComponent;
  let fixture: ComponentFixture<ZynerdLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZynerdLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZynerdLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
