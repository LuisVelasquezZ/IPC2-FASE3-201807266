import { Component, OnInit } from '@angular/core';
import { SeccionService } from './../../../../services/seccion.service';
import { CursoService } from './../../../../services/curso.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {
secciones:any[] = [];
uri:string;
curso:any = {nombre: ''};

  constructor(private seccionService:SeccionService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
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

  eliminarSeccion(idSeccion) {
    this.seccionService.eliminarSeccion(idSeccion).then(() => {
      this.getSecciones(this.uri);
    });
  }

}
