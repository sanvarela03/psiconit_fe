import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ICuenta } from '../../../../models/icuenta';
import { AgregarCuentasDialogComponent } from './dialogs/agregar-cuentas-dialog/agregar-cuentas-dialog.component';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  // Estados
  //   export interface IUser {
  //     id : number;
  //     username : string ;
  //     password : string ;
  //     name : string;
  //     email : string ;
  //     account: number[];
  // }
  formAgregarUsuario: FormGroup;
  cuentas: ICuenta[];

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {

    this.formAgregarUsuario = formBuilder.group(
      {
        username: ['', Validators.required],
        name: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', Validators.required],
      }
    )
    this.cuentas = [];
  }

  ngOnInit(): void {
  }

  hasError(nombreControl: string, validation: string) {
    const control = this.formAgregarUsuario.get(nombreControl);
    return control?.hasError(validation)
  }

  cancelar() {
    this.router.navigate(['/listar-usuarios'])
  }

  // Cuentas

  agregarCuenta() {
    const dialogRef = this.dialog.open(AgregarCuentasDialogComponent, {
      width: '350px',
      data: { titulo: 'Agregar cuenta', dato: '' }
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result && result.dato){
        // this.cuentas.push({})
      }
    })
  }

  editarCuenta(cuenta: ICuenta) {


  }
  borrarCuenta(cuenta: ICuenta) {

  }



}
