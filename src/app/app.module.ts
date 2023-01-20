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
import { MatDialogModule } from '@angular/material/dialog';
import { AlfabetoDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/alfabeto-dialog/alfabeto-dialog.component';
import { CirculosDualesDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/circulos-duales-dialog/circulos-duales-dialog.component';
import { CuentaAciertaDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/cuenta-acierta-dialog/cuenta-acierta-dialog.component';
import { CuadroMnesicoDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/cuadro-mnesico-dialog/cuadro-mnesico-dialog.component';
import { InterDosDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/inter-dos-dialog/inter-dos-dialog.component';
import { AritmeticaVegetalesDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/aritmetica-vegetales-dialog/aritmetica-vegetales-dialog.component';
import { PlagioDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/plagio-dialog/plagio-dialog.component';
import { RelojDialogComponent } from './component/body/realidad-virtual/actividades/dialogs/reloj-dialog/reloj-dialog.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsuariosComponent } from './component/body/usuarios/usuarios.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { UserAddComponent } from './component/body/usuarios/user-add/user-add.component';
import { UserEditComponent } from './component/body/usuarios/user-edit/user-edit.component';
import { MatSortModule } from '@angular/material/sort';
import { AgregarCuentasDialogComponent } from './component/body/usuarios/user-add/dialogs/agregar-cuentas-dialog/agregar-cuentas-dialog.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
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
    LoginComponent,
    CreateUserComponent,
    UsuariosComponent,
    UserAddComponent,
    UserEditComponent,
    AgregarCuentasDialogComponent,

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
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
