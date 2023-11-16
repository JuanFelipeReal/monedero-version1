import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private apiUrl = 'http://localhost/Monedero_2/API/informacion.php';
  private apiUrl2 = 'http://localhost/Monedero_2/API/transacciones.php';
  private apiUrl3 = 'http://localhost/Monedero_2/API/login.php';
  private apiUrl4 = 'http://localhost/Monedero_2/API/datos_generales.php';
  private apiUrl5 = 'http://localhost/Monedero_2/API/productos.php';
  private apiUrl6 = 'http://localhost/Monedero_2/API/recuperar.php';

  constructor(private http: HttpClient) { }
  buscar(usuario : string){
    return this.http.post(this.apiUrl, {usuario});
    
  }
  buscar_movimientos(usuario : string){
    return this.http.post(this.apiUrl2, {usuario});
  }

  datos_usuario(usuario : string){
  return this.http.post(this.apiUrl4, {usuario});
  }
  buscar_promociones(usuario : string){
    return this.http.post(this.apiUrl5 , {usuario});
  }

  autenticar(usuario: string, contrasena: string): Observable<any> {
    //console.log('Enviando datos al servidor:', { nombre_usuario: usuario, contrasena });
    return this.http.post(this.apiUrl3, { nombre_usuario: usuario, contrasena : contrasena });
  }

  recuperacion (usuario: string, dato_extra: string, pass_new: string): Observable<any>{
    console.log('Datos enviados son... ' , { usuario, dato_extra, pass_new});
    return this.http.post(this.apiUrl6 , {nombre_usuario: usuario, datos_extra: dato_extra, password : pass_new});
    
  }
}
