import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from 'src/app/conexion/conexion.service';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent {

  usuario: any = [];  // Ajusta el tipo de acuerdo a la estructura de datos del usuario
  datos: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ConexionService,
    private sessionService: SessionService
  ) { 
    // Obtén los datos del usuario desde el servicio de sesión
    this.usuario = this.sessionService.getUserData();
    //console.log(this.usuario);
    //console.log(this.usuario.user);
    
      // Realiza la solicitud a api.datos_usuario con el nombre de usuario
      this.api.datos_usuario(this.usuario.user).subscribe((response) => {
        this.datos = response;
        //console.log(this.datos);
      });
  }

  ngOnInit(): void {
  
  }
}
