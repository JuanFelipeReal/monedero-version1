import { Injectable, Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalRecuperarContrasenaComponent } from './components/modal-recuperar-contrasena/modal-recuperar-contrasena.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalController: ModalController) { }

  async abrirModalRecuperarContrasena() {
    const modal = await this.modalController.create({
      component: ModalRecuperarContrasenaComponent,
      componentProps: {
        // Puedes pasar datos adicionales al modal si es necesario
      }
    });

    return await modal.present();
  }

  async cerrar_modal(){
    const modal = await this.modalController.dismiss ({
      Component: ModalRecuperarContrasenaComponent, componentProps: {

      }
    });
  }
}
