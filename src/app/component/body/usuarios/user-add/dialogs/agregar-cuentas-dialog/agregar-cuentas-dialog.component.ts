import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatosDialogAddCuenta } from 'src/app/models/datos-dialog-add-cuenta';
import { ICuenta } from '../../../../../../models/icuenta';

@Component({
  selector: 'app-agregar-cuentas-dialog',
  templateUrl: './agregar-cuentas-dialog.component.html',
  styleUrls: ['./agregar-cuentas-dialog.component.css']
})
export class AgregarCuentasDialogComponent implements OnInit {

  estadoDeCuenta: string = "";
  estadosDeCuenta: string[] = ["Activo", "Inactivo"];

  constructor(
    public dialogRef: MatDialogRef<AgregarCuentasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICuenta
  ) { }

  ngOnInit(): void {
  }

  cancelar() {
    this.dialogRef.close();
  }

  setEstadoDeCuenta(estado: string) {
    console.log("El estado de cuenta del dialogo es: ", estado);
    return false;
  }

}
