import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

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

  getActividaes(idSeccion) {
    return this.request('GET', `${environment.serverUrl}/actividadSeccion/${idSeccion}`);
  }

  getActividad(idActividad) {
    return this.request('GET', `${environment.serverUrl}/actividad/${idActividad}`);
  }

  crearActividad(actividad) {
    return this.request('POST', `${environment.serverUrl}/actividad`, actividad);
  }

  crearDetalleActividad(detalleActividad) {
    return this.request('POST', `${environment.serverUrl}/destalleActividad`, detalleActividad);
  }

  actualizarActividad(actividad) {
    return this.request('PUT', `${environment.serverUrl}/actividad/${actividad.idActividad}`, actividad);
  }

  eliminarActividad(idActividad) {
    return this.request('DELETE', `${environment.serverUrl}/actividad/${idActividad}`);
  }
}
