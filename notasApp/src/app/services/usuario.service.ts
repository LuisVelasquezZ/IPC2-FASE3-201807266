import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private async request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {}
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  getUsuarios() {
    return this.request('GET', `${environment.serverUrl}/usuario`);
  }

  getAuxiliares() {
    return this.request('GET', `${environment.serverUrl}/auxiliar`);
  }

  getUsuario(idUsuario) {
    return this.request('GET', `${environment.serverUrl}/usuario/${idUsuario}`);
  }

  crearUsuario(usuario) {
    return this.request('POST', `${environment.serverUrl}/usuario`, usuario);
  }

  recuperacion(usuario) {
    return this.request('POST', `${environment.serverUrl}/recuperacion`, usuario);
  }

  actualizarUsuario(usuario) {
    return this.request('PUT', `${environment.serverUrl}/usuario/${usuario.idUsuario}`, usuario);
  }

  cambiarPass(usuario) {
    return this.request('PUT', `${environment.serverUrl}/recuperacion/${usuario.idUsuario}`, usuario);
  }
  
  eliminarUsuario(idUsuario) {
    return this.request('DELETE', `${environment.serverUrl}/usuario/${idUsuario}`);
  }

  enviarEmail(email) {
    return  this.request( 'POST', `${environment.serverUrl}/email/`, email)
    
  }
}
