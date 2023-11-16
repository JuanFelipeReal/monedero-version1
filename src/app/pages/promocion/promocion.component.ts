import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from 'src/app/conexion/conexion.service';
import { SessionService } from 'src/app/session.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.component.html'
})
export class PromocionComponent {
  usuario: any = [];  // Ajusta el tipo de acuerdo a la estructura de datos del usuario
  datos: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ConexionService,
    private alert : AlertController,
    private sessionService: SessionService
  ) { 
    // Obtén los datos del usuario desde el servicio de sesión
    this.usuario = this.sessionService.getUserData();
    console.log(this.usuario);
    console.log(this.usuario.user);
    
      // Realiza la solicitud a api.datos_usuario con el nombre de usuario
      this.api.buscar_promociones(this.usuario.user).subscribe((response) => {
        this.datos = response;
        //console.log(this.datos);
      });
  }

  async mostrarAlertaCanje() {
    const alert = await this.alert.create({
      header: 'Canjear Producto',
      message: 'Por favor, dirígirse a la tienda física para hacer válido el canje del producto.',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit(): void {
  
  }
}
