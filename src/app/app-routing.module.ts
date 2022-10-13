import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  {
    path: 'auth',//cuando entren a auth entonces cargame los hijos
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)// esos hijos van a venir de el producto authModule
   //cuando se cargen (.then-entonces pk es una promesa) entonces el modulo que va a regresar es el autModule
  },
  {
    path: 'cocina',//cuando entren a auth entonces cargame los hijos
    loadChildren:() => import('./cocina/cocina.module').then(m => m.CocinaModule)// esos hijos van a venir de el producto authModule
   //cuando se cargen (.then-entonces pk es una promesa) entonces el modulo que va a regresar es el autModule
  },
  {
    path:'404',
    component: ErrorPageComponent

  },
  {
    path:'**',
    redirectTo: '404'
  }
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)

  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
