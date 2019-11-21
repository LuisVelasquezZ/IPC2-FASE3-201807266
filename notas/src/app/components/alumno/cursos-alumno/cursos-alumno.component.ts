import { Component, OnInit } from '@angular/core';
import { CursoService } from './../../../services/curso.service' 

@Component({
  selector: 'app-cursos-alumno',
  templateUrl: './cursos-alumno.component.html',
  styleUrls: ['./cursos-alumno.component.css']
})
export class CursosAlumnoComponent implements OnInit {
  cursos:any[] = [];
  curso:any = {idCurso:null, nombre:'', descripcion:''}

  constructor(private cursoService:CursoService) { }

  ngOnInit() {
    this.getCursos();
  }

  private getCursos() {
    this.cursoService.getCursos().then((response:any) => {
      this.cursos = response.map((course) =>{
        return course;
      });
    });
  }
}
