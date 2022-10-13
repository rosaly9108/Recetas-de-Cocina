import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { RecetasComponent } from './pages/recetas/recetas.component';

const routes: Routes= [
{
path: '',
component: HomeComponent,
children: [
  {
    path: 'agregar',
    component: AgregarComponent
  },
  {
    path: 'buscar',
    component: BuscarComponent
  },
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'recetas/:id',
    component: RecetasComponent
  },
  {
    path: 'editar/:id',
    component: AgregarComponent
  },
  {
    path: ':id',
    component: RecetasComponent
  },
  {
    path: '**',
    redirectTo: 'listado'
  }
]
}
]

@NgModule({
  declarations: [],
  imports: [
RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CocinaRoutingModule { }
