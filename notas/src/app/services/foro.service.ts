import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

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

  getForos(idSeccion) {
    return this.request('GET', `${environment.serverUrl}/publicacionSeccion/${idSeccion}`);
  }

  getForo(idPublicacion) {
    return this.request('GET', `${environment.serverUrl}/publicacion/${idPublicacion}`);
  }

  crearForo(foro) {
    return this.request('POST', `${environment.serverUrl}/publicacion`, foro);
  }

  actualizarForo(foro) {
    return this.request('PUT', `${environment.serverUrl}/publicacion/${foro.idForo}`, foro);
  }

  eliminarForo(idForo) {
    return this.request('DELETE', `${environment.serverUrl}/publicacion/${idForo}`);
  }
}
