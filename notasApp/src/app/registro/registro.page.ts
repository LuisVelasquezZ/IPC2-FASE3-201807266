import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import {UsuarioService} from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup;
  usuario: any = {idUsuario: null, nombre: '', carnet: '', correo: '', pass: '', tipo: ''}
  constructor( private fb:FormBuilder, private usuarioService: UsuarioService, private router:Router) { }

  ngOnInit() {
    this.registroForm = this.fb.group({
      nombre: new FormControl(this.usuario.nombre, Validators.required),
      carnet: new FormControl(this.usuario.carnet, Validators.required),
      correo: new FormControl(this.usuario.correo, Validators.required),
      pass: new FormControl(this.usuario.pass, Validators.required)
    });
  }

  agregarUsuario(){
    const usuarioNuevo = {
      nombre: this.registroForm.get('nombre').value,
      carnet: this.registroForm.get('carnet').value,
      correo: this.registroForm.get('correo').value,
      pass: this.registroForm.get('pass').value,
      tipo:'Alumno',
    }
    this.usuarioService.crearUsuario(usuarioNuevo).then(() => {
      this.router.navigate(['/tabsLogin/login']);
    });
  }
}
