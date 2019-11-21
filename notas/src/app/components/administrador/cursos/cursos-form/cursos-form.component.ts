import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import {CursoService} from './../../../../services/curso.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {
  cursoForm: FormGroup;
  curso: any = {idCurso: '', nombre: '', descripion: ''}
  cursoEdit: any  = {};
  uri:string;
  constructor(
    private fb:FormBuilder,
    private cursoService: CursoService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.cursoForm = this.fb.group({
      nombre: new FormControl('', Validators.required),
      descripion: new FormControl('', Validators.required)
    });
    
    this.activatedRoute.params.subscribe(params => {
      this.uri = params["idCurso"];
      if(this.uri !== "nuevo") {
        this.cursoService.getCurso(params["idCurso"])
        .then(cursos => {
          this.cursoEdit = cursos[0];
          this.cursoForm = this.fb.group({
            nombre: new FormControl(this.cursoEdit.nombre, Validators.required),
            descripion: new FormControl(this.cursoEdit.descripion, Validators.required)
          });
        });
      } else {
        this.cursoForm = this.fb.group({
          nombre: new FormControl(this.curso.nombre, Validators.required),
          descripion: new FormControl(this.curso.descripion, Validators.required)
        });
      }
    });
  }

  agregarCurso(){
    const cursoNuevo = {
      idCurso: '',
      nombre: this.cursoForm.get('nombre').value,
      descripion: this.cursoForm.get('descripion').value
    }
    if(this.uri == "nuevo") {      
    this.cursoService.crearCurso(cursoNuevo).then(() => {
      this.router.navigate(['/administrador/cursos']);
    });
    } else {
      cursoNuevo.idCurso = this.uri;
      this.cursoService.actualizarCurso(cursoNuevo).then(() => {
        this.router.navigate(['/administrador/cursos']);
      })
    }
  }


}
