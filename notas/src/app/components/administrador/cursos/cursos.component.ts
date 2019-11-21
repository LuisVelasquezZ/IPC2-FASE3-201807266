import { Component, OnInit } from '@angular/core';
import { CursoService } from './../../../services/curso.service' 

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
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

  eliminarCurso(idCurso) {
    this.cursoService.eliminarCurso(idCurso).then(() => {
      this.getCursos();
    });
  }

}
