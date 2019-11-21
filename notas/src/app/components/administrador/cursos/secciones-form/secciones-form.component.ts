import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import {UsuarioService} from './../../../../services/usuario.service';
import { SeccionService } from './../../../../services/seccion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-secciones-form',
  templateUrl: './secciones-form.component.html',
  styleUrls: ['./secciones-form.component.css']
})
export class SeccionesFormComponent implements OnInit {
  seccionForm: FormGroup;
  seccion: any = {idSeccion: '', nombre: '', carnet: '', correo: '', pass: '', tipo: ''}
  seccionEdit: any  = {};
  uri:string;
  uriList: string;
  idCurso:string;
  idSeccion:string;
  usuarios: any[] = [];
  constructor(
    private fb:FormBuilder,
    private usuarioService: UsuarioService,
    private seccionService: SeccionService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getUsuarios();
    this.seccionForm = this.fb.group({
      nombre: new FormControl('', Validators.required),
      horaInicio: new FormControl('', Validators.required),
      horaFin: new FormControl('', Validators.required),
      idUsuario: new FormControl('', Validators.required),
      semestre: new FormControl('', Validators.required),
      anio: new FormControl('', Validators.required),
    });

    this.activatedRoute.params.subscribe(params => {
      this.idSeccion = params["idSeccion"];
      this.uriList = params["idSeccion"].split("-", 2);
      this.uri = this.uriList[0];
      if(this.uri !== "nuevo") {
        this.seccionService.getSeccion(this.uri )
        .then(secciones => {
          this.seccionEdit = secciones[0];
          console.log(this.seccionEdit);
          this.idCurso =  this.seccionEdit.idCurso
          this.seccionForm = this.fb.group({
            nombre: new FormControl(this.seccionEdit.nombre, Validators.required),
            horaInicio: new FormControl(this.seccionEdit.horaInicio, Validators.required),
            horaFin: new FormControl(this.seccionEdit.horaFin, Validators.required),
            idUsuario: new FormControl( '', Validators.required).setValue(this.seccionEdit.idUsuario),
            semestre: new FormControl(this.seccionEdit.semestre, Validators.required),
            anio: new FormControl(this.seccionEdit.anio, Validators.required),
          });
        });
      } else {
        this.seccionForm = this.fb.group({
          nombre: new FormControl('', Validators.required),
          horaInicio: new FormControl('', Validators.required),
          horaFin: new FormControl('', Validators.required),
          idUsuario: new FormControl('', Validators.required),
          semestre: new FormControl('', Validators.required),
          anio: new FormControl('', Validators.required),
        });
      }
    });
  }

  agregarSeccion(){
    const seccionNuevo = {
      idSeccion: '',
      estado: 'Activo',
      idCurso: this.uriList[1],
      nombre: this.seccionForm.get('nombre').value,
      horaInicio: this.seccionForm.get('horaInicio').value,
      horaFin: this.seccionForm.get('horaFin').value,
      idUsuario: this.seccionForm.get('idUsuario').value,
      semestre: this.seccionForm.get('semestre').value,
      anio: this.seccionForm.get('anio').value
    }
    if(this.uri == "nuevo") {      
    this.seccionService.crearSeccion(seccionNuevo).then(() => {
      this.router.navigate(['/administrador/secciones', this.uriList[1]]);
    });
    } else {
      seccionNuevo.idSeccion = this.idSeccion;
      seccionNuevo.idCurso = this.idCurso;
      this.seccionService.actualizarSeccion(seccionNuevo).then(() => {
        this.router.navigate(['/administrador/secciones', this.idCurso]);
      })
    }
  }

  private getUsuarios() {
    this.usuarioService.getAuxiliares().then((response:any) => {
      this.usuarios = response.map((user) =>{
        return user;
      });
    });
  }

}
