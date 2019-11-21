import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http:HttpClient) { }

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

  getComentarios(idForo) {
    return this.request('GET', `${environment.serverUrl}/comentario/${idForo}`);
  }

  getComentario(idComentario) {
    return this.request('GET', `${environment.serverUrl}/comentario/${idComentario}`);
  }

  crearComentario(comentario) {
    return this.request('POST', `${environment.serverUrl}/comentario`, comentario);
  }

  actualizarComentario(comentario) {
    return this.request('PUT', `${environment.serverUrl}/comentario/${comentario.idComentario}`, comentario);
  }

  eliminarComentario(idComentario) {
    return this.request('DELETE', `${environment.serverUrl}/publicacion/${idComentario}`);
  }
}
