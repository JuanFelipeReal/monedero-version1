import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ConexionService } from 'src/app/conexion/conexion.service';
import { ModalService } from 'src/app/modal.service';

interface LoginForm {
  user: string;
  dato_extra: string;
  contra_new: string;
}
@Component({
  selector: 'app-modal-recuperar-contrasena',
  templateUrl: './modal-recuperar-contrasena.component.html'
})
export class ModalRecuperarContrasenaComponent {
  modalController: any;

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
    private conexionService: ConexionService,
    private router: Router,
    private myModalCtrl : ModalController,
    private modalservice : ModalService
  ) { }

 async cerrarModal() {
    this.modalservice.cerrar_modal();
  }
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Error de Recuperación de Contraseña',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
  formData: LoginForm = {user: '', dato_extra: '',contra_new: ''};

  async iniciar_recuperacion(formData: LoginForm): Promise<void>{
    console.log('Datos del formulario son: ',formData);
    if(formData.user.trim() === '' || formData.contra_new.trim() === '' || formData.dato_extra.trim() === ''){
      this.presentAlert('Por Favor, completa los campos correctamente.');
      return;
    }

    this.conexionService.recuperacion(formData.user, formData.dato_extra, formData.contra_new).subscribe({
      next: (response) => {
        if(response.success){
          this.presentAlert(response.message);
          setTimeout(()=>{
            this.router.navigate(['/login']);
          },2000)
        }else{
 
          this.presentAlert(response.message);
        }
      },
      error: (error) => {
        console.error;
        console.log(error);
        this.presentAlert('Hubo un error inesperado. Intentelo más Mañana ---'+ error);
      },
    });
  }
  
}