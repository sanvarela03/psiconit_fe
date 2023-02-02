import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Account } from '../../../../models/account';
import { AgregarCuentasDialogComponent } from './dialogs/agregar-cuentas-dialog/agregar-cuentas-dialog.component';
import { DatosDialogAddCuenta } from '../../../../models/datos-dialog-add-cuenta';

import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { MatTableModule } from '@angular/material/table';

import { Icu } from '@angular/compiler/src/i18n/i18n_ast';

import { MatTable } from '@angular/material/table';
import { LocalStorageService } from '../../../../services/ssd/local-storage.service';
import { DataService } from 'src/app/services/ssd/data.service';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit, OnDestroy {
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
  cuentas: Account[] = [];
  dataSource: MatTableDataSource<Account>;

  subRef$: Subscription = new Subscription;

  @ViewChild('table') table!: MatTable<any>;

  displayedColumns: string[] = [
    'balance',
    'isActive',
    'lastChangeDate',
    'actions'
  ];

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private storageService: LocalStorageService,
    private dataService: DataService) {
    this.dataSource = new MatTableDataSource<Account>();



    this.formAgregarUsuario = formBuilder.group(
      {
        username: ['', Validators.required],
        name: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', Validators.required],
      }
    )

  }
  ngOnDestroy(): void {

  }



  ngAfterContentInit() {

  }

  ngOnInit(): void {
    if (this.getCuentas()) {
      this.cuentas = this.getCuentas();
    }
    this.dataSource.data = this.cuentas;
  }

  hasError(nombreControl: string, validation: string) {
    const control = this.formAgregarUsuario.get(nombreControl);
    return control?.hasError(validation)
  }

  // AGREGAR USUARIO

  agregarUsuario() {
    const datosUsuario: IUser = {
      username: this.formAgregarUsuario.value.username,
      password: this.formAgregarUsuario.value.password,
      name: this.formAgregarUsuario.value.name,
      email: this.formAgregarUsuario.value.email,
      accounts: this.cuentas
    }

    console.log("type1", typeof datosUsuario.username);
    console.log("type2", typeof datosUsuario.password);
    console.log("type3", typeof datosUsuario.name);
    console.log("type4", typeof datosUsuario.email);
    console.log("type5", typeof datosUsuario.accounts);
    console.log("type5", typeof datosUsuario.accounts[0].lastChangeDate);
    console.log("JSON: ", JSON.stringify(datosUsuario));

    console.log("Datos Usuario a enviar: ", datosUsuario);

    const url = 'http://localhost:8000/api/user/';
    this.subRef$ = this.dataService.post<IUser>(url, datosUsuario)
      .subscribe(res => {
        this.router.navigate(['/listar-usuarios']);
      }, err => {
        console.log('Error al crear el cliente', err);
      });
  }


  cancelar() {
    this.router.navigate(['/listar-usuarios'])
  }




  // AGREGAR CUENTAS

  agregarCuenta() {
    const dialogo = this.abrirDialogoAgregarCuenta();

    dialogo.afterClosed().subscribe(cuentaNueva => {

      console.log("DATOS DEVUELTOS: ", cuentaNueva);

      if (cuentaNueva) {
        console.log("Si entra")
        this.cuentas.push(cuentaNueva);
        this.setCuentas(this.cuentas);
        this.dataSource.data = this.cuentas;
        this.table.renderRows();
      }

      console.log("CUENTAS: ", this.cuentas)
    })
  }

  editarCuenta(cuenta: Account, indice: number) {

    console.log("Cuenta seleccionada: ", cuenta);
    console.log("Indice: ", indice);


    const dialogo = this.abrirDialogoEditarCuenta(cuenta);

    dialogo.afterClosed().subscribe(data => {

      if (data) {
        console.log("|Datos devueltos en editar cuenta|: ", data);
        this.cuentas[indice] = data;
        this.dataSource.data = this.cuentas;
        this.table.renderRows();
      }
    })

  }

  borrarCuenta(cuenta: Account, indice: number) {

    this.cuentas.splice(indice, 1);
    this.dataSource.data = this.cuentas;
    this.setCuentas(this.cuentas);
    this.table.renderRows();

  }

  private getCuentas(): Account[] {
    let cuentas: Account[] = this.storageService.retrieve('cuentas');

    return cuentas
  }

  private setCuentas(cuentas: Account[]) {
    this.storageService.store('cuentas', cuentas)
  }

  private abrirDialogoAgregarCuenta() {
    return this.dialog.open(AgregarCuentasDialogComponent, {
      width: 'fit-content',
      data: { titulo: 'Agregar cuenta', cuenta: null }
    });
  }

  private abrirDialogoEditarCuenta(cuenta: Account) {
    return this.dialog.open(AgregarCuentasDialogComponent, {
      width: 'fit-content',
      data: { titulo: 'Editar cuenta', cuenta: cuenta }
    });
  }

}
