import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; //librería para gestión de mensajes

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = "http://localhost:9000/iniciarSesion"
  private _httpClient = inject(HttpClient);
  private _router = inject(Router);

  login(emailLogin: string, passwordLogin: string){
    // Pasamos URL y cuerpo de la petición
    return this._httpClient.post(this.apiUrl, {emailLogin, passwordLogin})
  }

  getToken() : string | null {
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');

     // Mostramos el mensaje con SweetAlert2
     Swal.fire({
      icon: 'success',
      title: 'Sesión cerrada',
      text: 'Has cerrado sesión exitosamente.',
      showConfirmButton: false,
      timer: 2000 // Mensaje desaparece automáticamente después de 2 segundos
    }).then(() => {
      this._router.navigate(['/login'])
    });
    
  }
}
