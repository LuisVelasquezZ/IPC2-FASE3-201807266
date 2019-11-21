import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {
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

  getSecciones(idCurso) {
    return this.request('GET', `${environment.serverUrl}/seccionCurso/${idCurso}`);
  }

  getSeccionesAux(idUsuario) {
    return this.request('GET', `${environment.serverUrl}/seccionAuxiliar/${idUsuario}`);
  }


  getSeccion(idSeccion) {
    return this.request('GET', `${environment.serverUrl}/seccion/${idSeccion}`);
  }

  crearSeccion(seccion) {
    return this.request('POST', `${environment.serverUrl}/seccion`, seccion);
  }

  actualizarSeccion(seccion) {
    console.log(seccion);
    return this.request('PUT', `${environment.serverUrl}/seccion/${seccion.idSeccion}`, seccion);
  }

  eliminarSeccion(idSeccion) {
    return this.request('DELETE', `${environment.serverUrl}/seccion/${idSeccion}`);
  }
}
