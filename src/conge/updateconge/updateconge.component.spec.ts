import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecongeComponent } from './updateconge.component';

describe('UpdatecongeComponent', () => {
  let component: UpdatecongeComponent;
  let fixture: ComponentFixture<UpdatecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
