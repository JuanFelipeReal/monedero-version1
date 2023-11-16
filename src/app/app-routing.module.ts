import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromocionComponent } from './pages/promocion/promocion.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AjustesAppComponent } from './pages/ajustes-app/ajustes-app.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { DatosGeneralesComponent } from './pages/datos-generales/datos-generales.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';
import { LoginComponent } from './sesion/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full',
    
  },
  {
    path:'home',
    component: InicioComponent
  },
  {
    path:'ajustes',
    component: AjustesComponent
  },
  {
    path:'promo',
    component: PromocionComponent
  },
  {
    path:'ajustesapp',
    component: AjustesAppComponent
  },
  
  {
    path:'ayudaxd',
    component: AyudaComponent
  },
  
  {
    path:'datosgenerales',
    component: DatosGeneralesComponent
  },
  
  {
    path:'terminos',
    component: TerminosComponent
  },
  
  {
    path:'privacidad',
    component: PrivacidadComponent
  },
  {
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { 

}
