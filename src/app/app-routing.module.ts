import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './component/body/info/info.component';
import { RealidadVirtualComponent } from './component/body/realidad-virtual/realidad-virtual.component';
import { RehacvComponent } from './component/body/realidad-virtual/rehacv/rehacv.component';
import { ActividadesComponent } from './component/body/realidad-virtual/actividades/actividades.component';
import { ProcesosCognitivosComponent } from './component/body/tratamiento/procesos-cognitivos/procesos-cognitivos.component';
import { ActividadesDeTratamientoComponent } from './component/body/tratamiento/actividades-de-tratamiento/actividades-de-tratamiento.component';

const routes: Routes = [
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'vr', component: RealidadVirtualComponent },
  { path: 'vr-rehacv', component: RehacvComponent },
  { path: 'vr-act', component: ActividadesComponent },
  { path: 'trat-procesos-cog', component: ProcesosCognitivosComponent },
  { path: 'trat-act', component: ActividadesDeTratamientoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
