import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroTabComponent } from './zero-tab.component';

describe('ZeroTabComponent', () => {
  let component: ZeroTabComponent;
  let fixture: ComponentFixture<ZeroTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeroTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
