import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehacvComponent } from './rehacv.component';

describe('RehacvComponent', () => {
  let component: RehacvComponent;
  let fixture: ComponentFixture<RehacvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RehacvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RehacvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
