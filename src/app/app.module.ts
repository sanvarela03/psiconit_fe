import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { InfoComponent } from './component/body/info/info.component';
import { RealidadVirtualComponent } from './component/body/realidad-virtual/realidad-virtual.component';
import { ActividadesComponent } from './component/body/realidad-virtual/actividades/actividades.component';
import { RehacvComponent } from './component/body/realidad-virtual/rehacv/rehacv.component';
import { TratamientoComponent } from './component/body/tratamiento/tratamiento.component';
import { ProcesosCognitivosComponent } from './component/body/tratamiento/procesos-cognitivos/procesos-cognitivos.component';



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
    ProcesosCognitivosComponent
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
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
