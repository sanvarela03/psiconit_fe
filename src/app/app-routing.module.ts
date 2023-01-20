import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './component/body/info/info.component';
import { RealidadVirtualComponent } from './component/body/realidad-virtual/realidad-virtual.component';
import { RehacvComponent } from './component/body/realidad-virtual/rehacv/rehacv.component';
import { ActividadesComponent } from './component/body/realidad-virtual/actividades/actividades.component';
import { ProcesosCognitivosComponent } from './component/body/tratamiento/procesos-cognitivos/procesos-cognitivos.component';
import { ActividadesDeTratamientoComponent } from './component/body/tratamiento/actividades-de-tratamiento/actividades-de-tratamiento.component';
import { LoginComponent } from './component/login/login.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { UsuariosComponent } from './component/body/usuarios/usuarios.component';
import { AuthGuard } from './guards/auth-guard';
import { UserAddComponent } from './component/body/usuarios/user-add/user-add.component';
import { UserEditComponent } from './component/body/usuarios/user-edit/user-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'vr', component: RealidadVirtualComponent },
  { path: 'vr-rehacv', component: RehacvComponent },
  { path: 'vr-act', component: ActividadesComponent },
  { path: 'trat-procesos-cog', component: ProcesosCognitivosComponent },
  { path: 'trat-act', component: ActividadesDeTratamientoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'listar-usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
  { path: 'add-usuario', component: UserAddComponent, canActivate: [AuthGuard] },
  { path: 'edit-usuario/:id', component: UserEditComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
