import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { PromocionComponent } from './pages/promocion/promocion.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AjustesAppComponent } from './pages/ajustes-app/ajustes-app.component';
import { DatosGeneralesComponent } from './pages/datos-generales/datos-generales.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';
import { LoginComponent } from './sesion/login/login.component';
import { ActivatedRoute, RouterState } from '@angular/router';
import { ConexionService } from './conexion/conexion.service';
import { SessionService } from './session.service';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';
import { ModalRecuperarContrasenaComponent } from './components/modal-recuperar-contrasena/modal-recuperar-contrasena.component';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    PromocionComponent,
    AjustesComponent,
    InicioComponent,
    AjustesAppComponent,
    DatosGeneralesComponent,
    AyudaComponent,
    TerminosComponent,
    PrivacidadComponent,
    LoginComponent,
    ModalRecuperarContrasenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,
    QRCodeModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
