import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCuentasDialogComponent } from './agregar-cuentas-dialog.component';

describe('AgregarCuentasDialogComponent', () => {
  let component: AgregarCuentasDialogComponent;
  let fixture: ComponentFixture<AgregarCuentasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCuentasDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCuentasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
