import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from 'src/app/conexion/conexion.service';
import { QRCodeModule } from 'angularx-qrcode';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {
  success: string = "";
  userData: any; // Variable para almacenar los datos del usuario
  datos: any = [];
  // variables de las transacciones
  success2: string = "";
  DatosReci: any;
  DatosMostrar: any = [];
  // Add a property to store the generated QR code data
  qrCodeData: string = '';

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private api: ConexionService,
              private login_acces: SessionService) {
    this.route.queryParams.subscribe(params => {
      this.success = params['user'];
      console.log(this.success);

      if (!this.success) {
        // Redirige al componente de inicio de sesión si no hay datos de usuario
        this.router.navigate(['/login']);
        return;
      }

      this.login_acces.setUserData(this.success, null);

      this.api.buscar(this.success).subscribe((response) => {
        this.userData = response;
        console.log(this.userData);
        this.datos = response;
        this.qrCodeData = this.datos[0].nombre_user; // Ajusta según la estructura de tus datos
      });


      
      this.success2 = params['user'];
      this.api.buscar_movimientos(this.success2).subscribe((response2) => {
        this.DatosReci = response2;
        console.log(this.DatosReci);
        this.DatosMostrar = response2;
        // Aquí puedes formar el contenido del código QR, por ejemplo, el nombre de usuario

      });
    });

  }


  ngOnInit(): void { }
  getGreeting() {
    const now = new Date();
    const hours = now.getHours();

    let greeting = '';
    if (hours >= 5 && hours < 12) {
      greeting = 'Buenos días';
    } else if (hours >= 12 && hours < 18) {
      greeting = 'Buenas tardes';
    } else {
      greeting = 'Buenas noches';
    }

    return greeting;
  }


}
