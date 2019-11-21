import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

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


  getAsignaciones(idUsuario) {
    return this.request('GET', `${environment.serverUrl}/asignacion/${idUsuario}`);
  }

  getAsignacionesAux(idSeccion) {
    return this.request('GET', `${environment.serverUrl}/asignacionSeccion/${idSeccion}`);
  }


  crearAsignacion(asignacion) {
    return this.request('POST', `${environment.serverUrl}/asignacion`, asignacion);
  }

  eliminarAsignacion(idAsignacion) {
    return this.request('DELETE', `${environment.serverUrl}/asignacion/${idAsignacion}`);
  }
}
