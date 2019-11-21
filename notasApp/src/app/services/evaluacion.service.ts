import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {
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

  getEvaluaciones(idSeccion) {
    return this.request('GET', `${environment.serverUrl}/evaluacionSeccion/${idSeccion}`);
  }

  getEvaluacion(idEvaluacion) {
    return this.request('GET', `${environment.serverUrl}/evaluacion/${idEvaluacion}`);
  }

  crearEvaluacion(evaluacion) {
    return this.request('POST', `${environment.serverUrl}/evaluacion`, evaluacion);
  }

  /*crearDetalleEvaluacion(detalleEvaluacion) {
    return this.request('POST', `${environment.serverUrl}/destalleActividad`, detalleActividad);
  }*/

  actualizarEvaluacion(evaluacion) {
    return this.request('PUT', `${environment.serverUrl}/evaluacion/${evaluacion.idEvaluacion}`, evaluacion);
  }

  eliminarEvaluacion(idEvaluacion) {
    return this.request('DELETE', `${environment.serverUrl}/evaluacion/${idEvaluacion}`);
  }
}
