import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConexionService } from 'src/app/conexion/conexion.service';
import { ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/modal.service';

interface LoginForm {
  user: string;
  contra: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
    private conexionService: ConexionService,
    private router: Router,
    private modal : ModalController,
    private modalservice : ModalService
  ) { }

  async recuperacion() {
    this.modalservice.abrirModalRecuperarContrasena();
  }


  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Error en Iniciar Sesión',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
  formData: LoginForm = { user: '', contra: '' };
  async iniciarSesion(formData: LoginForm): Promise<void> {
    console.log('Datos del formulario:', formData);
    if (formData.user.trim() === '' || formData.contra.trim() === '') {
      this.presentAlert('Por favor, completa todos los campos.');
      return;
    }
    // Llama al servicio para autenticar al usuario
    this.conexionService.autenticar(formData.user, formData.contra).subscribe({
      next: (response) => {
        if (response.success) {
          // Éxito: redirige a la página principal
          this.router.navigate(['/home'], { queryParams: { user: formData.user } });
        } else {
          // Error: muestra un mensaje de alerta con el mensaje del servidor
          this.presentAlert(response.message);
        }
      },
      error: (error) => {
        // Error: muestra un mensaje de alerta
        this.presentAlert('Hubo un error al iniciar sesión. Inténtalo de nuevo.' + error);
      },
    });
  }
  }

