import { Component, OnInit } from '@angular/core';
import { SeccionService } from './../../../services/seccion.service';
import { AsignacionService} from './../../../services/asignacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secciones-alumno',
  templateUrl: './secciones-alumno.component.html',
  styleUrls: ['./secciones-alumno.component.css']
})
export class SeccionesAlumnoComponent implements OnInit {
  secciones:any[] = [];
  uri:any;
  constructor(private seccionService:SeccionService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private asignacionService:AsignacionService) { }

  ngOnInit() {
    this.uri = JSON.parse(localStorage.getItem("usuario"));
    this.getSecciones(this.uri.idUsuario);
  }

  private getSecciones(idUsuario) {
    this.asignacionService.getAsignaciones(idUsuario).then((response:any) => {
      this.secciones = response.map((seccion) =>{
        return seccion;
      });
    });
  }
}
