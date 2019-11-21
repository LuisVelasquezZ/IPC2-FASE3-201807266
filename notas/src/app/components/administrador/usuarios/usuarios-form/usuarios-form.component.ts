import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import {UsuarioService} from './../../../../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {
  usuarioForm: FormGroup;
  usuario: any = {idUsuario: '', nombre: '', carnet: '', correo: '', pass: '', tipo: ''}
  usuarioEdit: any  = {};
  uri:string;

  constructor(
    private fb:FormBuilder,
    private usuarioService: UsuarioService,
    private router:Router,
    private activatedRoute:ActivatedRoute) {
     }

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      nombre: new FormControl('', Validators.required),
      carnet: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required)
    });
    
    this.activatedRoute.params.subscribe(params => {
      this.uri = params["idUsuario"];
      if(this.uri !== "nuevo") {
        this.usuarioService.getUsuario(params["idUsuario"])
        .then(usuarios => {
          this.usuarioEdit = usuarios[0];
          this.usuarioForm = this.fb.group({
            nombre: new FormControl(this.usuarioEdit.nombre, Validators.required),
            carnet: new FormControl(this.usuarioEdit.carnet, Validators.required),
            correo: new FormControl(this.usuarioEdit.correo, Validators.required),
            pass: new FormControl(this.usuarioEdit.pass, Validators.required),
            tipo: new FormControl(this.usuarioEdit.tipo, Validators.required)
          });
        });
      } else {
        this.usuarioForm = this.fb.group({
          nombre: new FormControl(this.usuario.nombre, Validators.required),
          carnet: new FormControl(this.usuario.carnet, Validators.required),
          correo: new FormControl(this.usuario.correo, Validators.required),
          pass: new FormControl(this.usuario.pass, Validators.required),
          tipo: new FormControl(this.usuario.tipo, Validators.required)
        });
      }
    });
  }

  agregarUsuario(){
    const usuarioNuevo = {
      idUsuario: '',
      nombre: this.usuarioForm.get('nombre').value,
      carnet: this.usuarioForm.get('carnet').value,
      correo: this.usuarioForm.get('correo').value,
      pass: this.usuarioForm.get('pass').value,
      tipo:this.usuarioForm.get('tipo').value,
    }
    if(this.uri == "nuevo") {      
    this.usuarioService.crearUsuario(usuarioNuevo).then(() => {
      this.router.navigate(['/administrador/usuarios']);
    });
    } else {
      usuarioNuevo.idUsuario = this.uri;
      this.usuarioService.actualizarUsuario(usuarioNuevo).then(() => {
        this.router.navigate(['/administrador/usuarios']);
      })
    }
  }


}
