import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

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

  getCursos() {
    return this.request('GET', `${environment.serverUrl}/curso`);
  }

  getCurso(idCurso) {
    return this.request('GET', `${environment.serverUrl}/curso/${idCurso}`);
  }

  crearCurso(curso) {
    return this.request('POST', `${environment.serverUrl}/curso`, curso);
  }

  actualizarCurso(curso) {
    return this.request('PUT', `${environment.serverUrl}/curso/${curso.idCurso}`, curso);
  }

  eliminarCurso(idCurso) {
    return this.request('DELETE', `${environment.serverUrl}/curso/${idCurso}`);
  }
}
