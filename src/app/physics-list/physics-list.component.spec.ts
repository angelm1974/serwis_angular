import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsListComponent } from './physics-list.component';

describe('PhysicsListComponent', () => {
  let component: PhysicsListComponent;
  let fixture: ComponentFixture<PhysicsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
