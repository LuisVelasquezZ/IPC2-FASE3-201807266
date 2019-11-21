import { Component, OnInit } from '@angular/core';
import { SeccionService } from './../../../services/seccion.service';
import { CursoService } from './../../../services/curso.service';
import { AsignacionService} from './../../../services/asignacion.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asignacion-alumno',
  templateUrl: './asignacion-alumno.component.html',
  styleUrls: ['./asignacion-alumno.component.css']
})
export class AsignacionAlumnoComponent implements OnInit {
  secciones:any[] = [];
uri:string;
curso:any = {nombre: ''};

  constructor(private seccionService:SeccionService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private asiganacionService:AsignacionService,
    private cursoService:CursoService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
    this.uri = params["idCurso"];
    this.getSecciones(this.uri);
    this.cursoService.getCurso(this.uri).then( (user) =>{
      this.curso = user[0]
    })
  });
  
  }

  private getSecciones(idCurso) {
    this.seccionService.getSecciones(idCurso).then((response:any) => {
      this.secciones = response.map((seccion) =>{
        return seccion;
      });
    });
  }

  private agregarAsignacion(idSeccion) {
    const asignacionNuevo = {
      idUsuario : JSON.parse(localStorage.getItem("usuario")).idUsuario,
      idSeccion : idSeccion
    }
    this.asiganacionService.crearAsignacion(asignacionNuevo).then(() => {
      this.router.navigate(['alumno/secciones-alumno'])
    })
  }

}
