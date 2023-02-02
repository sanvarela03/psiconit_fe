import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatosDialogAddCuenta } from 'src/app/models/datos-dialog-add-cuenta';
import { Account } from '../../../../../../models/account';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-agregar-cuentas-dialog',
  templateUrl: './agregar-cuentas-dialog.component.html',
  styleUrls: ['./agregar-cuentas-dialog.component.css']
})
export class AgregarCuentasDialogComponent implements OnInit {

  estadoDeCuenta: string = "";
  estadosDeCuenta: string[] = ["Activo", "Inactivo"];
  estadoCtrl = new FormControl(null);

  formAgregarCuenta: FormGroup;

  constructor(
    private datePipe: DatePipe,
    formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AgregarCuentasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data_passed: any

  ) {

    this.formAgregarCuenta = formBuilder.group({
      balance: ['', Validators.required],
      estado: ['', Validators.required],
      fecha: ['', Validators.required],
    })

  }
  ngOnInit(): void {

    if (this.data_passed.cuenta) {
      this.formAgregarCuenta.get('balance')?.patchValue(this.data_passed.cuenta.balance);
      this.formAgregarCuenta.get('estado')?.setValue((this.data_passed.cuenta.isActive) ? this.estadosDeCuenta[0] : this.estadosDeCuenta[1]);
      this.formAgregarCuenta.get('fecha')?.patchValue(this.data_passed.cuenta.lastChangeDate);
    }
  }

  cancelar() {
    this.dialogRef.close();


  }

  setEstadoDeCuenta(estado: string) {
    console.log("El estado de cuenta del dialogo es: ", estado);
    return false;
  }

  enviarDatos() {
    const datosCuenta: Account = {
      balance: +this.formAgregarCuenta.value.balance,
      isActive: (this.formAgregarCuenta.value.estado === this.estadosDeCuenta[0]) ? true : false,
      lastChangeDate: this.datePipe.transform(this.formAgregarCuenta.value.fecha, 'yyyy-MM-ddTHH:mm:ssZ')!
    }
    this.dialogRef.close(datosCuenta);
  }



  obtenerFormatoStringDeFecha(): string {

    return "";
  }
}
