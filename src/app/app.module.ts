import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { InfoComponent } from './component/body/info/info.component';
import { RealidadVirtualComponent } from './component/body/realidad-virtual/realidad-virtual.component';
import { ActividadesComponent } from './component/body/realidad-virtual/actividades/actividades.component';
import { RehacvComponent } from './component/body/realidad-virtual/rehacv/rehacv.component';
import { TratamientoComponent } from './component/body/tratamiento/tratamiento.component';
import { ProcesosCognitivosComponent } from './component/body/tratamiento/procesos-cognitivos/procesos-cognitivos.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { ActividadesDeTratamientoComponent } from './component/body/tratamiento/actividades-de-tratamiento/actividades-de-tratamiento.component';
import { QueEsComponent } from './component/body/info/que-es/que-es.component';
import { ComoFuncionaComponent } from './component/body/info/como-funciona/como-funciona.component';
import { AQuienComponent } from './component/body/info/a-quien/a-quien.component';
import { InfiltradoDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/infiltrado-dialog/infiltrado-dialog.component';
import { ColoresDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/colores-dialog/colores-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AlfabetoDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/alfabeto-dialog/alfabeto-dialog.component';
import { CirculosDualesDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/circulos-duales-dialog/circulos-duales-dialog.component';
import { CuentaAciertaDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/cuenta-acierta-dialog/cuenta-acierta-dialog.component';
import { CuadroMnesicoDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/cuadro-mnesico-dialog/cuadro-mnesico-dialog.component';
import { InterDosDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/inter-dos-dialog/inter-dos-dialog.component';
import { AritmeticaVegetalesDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/aritmetica-vegetales-dialog/aritmetica-vegetales-dialog.component';
import { PlagioDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/plagio-dialog/plagio-dialog.component';
import { RelojDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/reloj-dialog/reloj-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InfoComponent,
    RealidadVirtualComponent,
    ActividadesComponent,
    RehacvComponent,
    TratamientoComponent,
    ProcesosCognitivosComponent,
    ActividadesDeTratamientoComponent,
    QueEsComponent,
    ComoFuncionaComponent,
    AQuienComponent,
    InfiltradoDialogComponent,
    ColoresDialogComponent,
    AlfabetoDialogComponent,
    CirculosDualesDialogComponent,
    CuentaAciertaDialogComponent,
    CuadroMnesicoDialogComponent,
    InterDosDialogComponent,
    AritmeticaVegetalesDialogComponent,
    PlagioDialogComponent,
    RelojDialogComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatTreeModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
