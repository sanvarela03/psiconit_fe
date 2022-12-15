import { Component, OnInit } from '@angular/core';
import { InfiltradoDialogComponent } from './dialogs/infiltrado-dialog/infiltrado-dialog.component';
import { ColoresDialogComponent } from './dialogs/colores-dialog/colores-dialog.component';
import { AlfabetoDialogComponent } from './dialogs/alfabeto-dialog/alfabeto-dialog.component';
import { CirculosDualesDialogComponent } from './dialogs/circulos-duales-dialog/circulos-duales-dialog.component';
import { CuentaAciertaDialogComponent } from './dialogs/cuenta-acierta-dialog/cuenta-acierta-dialog.component';
import { CuadroMnesicoDialogComponent } from './dialogs/cuadro-mnesico-dialog/cuadro-mnesico-dialog.component';
import { InterDosDialogComponent } from './dialogs/inter-dos-dialog/inter-dos-dialog.component';
import { AritmeticaVegetalesDialogComponent } from './dialogs/aritmetica-vegetales-dialog/aritmetica-vegetales-dialog.component';
import { PlagioDialogComponent } from './dialogs/plagio-dialog/plagio-dialog.component';
import { RelojDialogComponent } from './dialogs/reloj-dialog/reloj-dialog.component';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
  providers: [
    InfiltradoDialogComponent,
    ColoresDialogComponent,
    AlfabetoDialogComponent,
    CirculosDualesDialogComponent,
    CuentaAciertaDialogComponent,
    CuadroMnesicoDialogComponent,
    InterDosDialogComponent,
    AritmeticaVegetalesDialogComponent,
    PlagioDialogComponent,
    RelojDialogComponent
  ]
})
export class ActividadesComponent implements OnInit {

  constructor(
    private infilDialog: InfiltradoDialogComponent,
    private coloresDialog: ColoresDialogComponent,
    private alfabetoDialog: AlfabetoDialogComponent,
    private circulosDualesDialog: CirculosDualesDialogComponent,
    private cuentaAciertaDialog: CuentaAciertaDialogComponent,
    private cuadroMnesicoDialog: CuadroMnesicoDialogComponent,
    private interDosDialog: InterDosDialogComponent,
    private aritmeticaVegetalesDialog: AritmeticaVegetalesDialogComponent,
    private plagioDialog : PlagioDialogComponent,
    private relojDialog: RelojDialogComponent
  ) {
  }

  ngOnInit(): void {
  }

  abrirDialogDeInfiltrado() {
    this.infilDialog.openDialog();
  }

  abrirDialogDeColores() {
    this.coloresDialog.openDialog();
  }

  abrirDialogDeAlfabeto() {
    this.alfabetoDialog.openDialog();
  }

  abrirDialogDeCirculosDuales() {
    this.circulosDualesDialog.openDialog();

  }

  abrirDialogDeCuentaAcierta() {
    this.cuentaAciertaDialog.openDialog();
  }

  abrirDialogDeCuadroMnesico() {
    this.cuadroMnesicoDialog.openDialog();

  }

  abrirDialogDeInterDos() {
    this.interDosDialog.openDialog();
  }

  abrirDialogDeAritmeticaVegetales() {
    this.aritmeticaVegetalesDialog.openDialog();
  }

  abrirDialogDePlagio() {
    this.plagioDialog.openDialog();
  }

  abrirDialogDeReloj() {
    this.relojDialog.openDialog();
  }

}
