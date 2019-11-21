import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  recuperarForm: FormGroup;
  usuario:any = {correo:'', texto:'', para:''}
  usuarios:any[] = [];

  constructor(private fb:FormBuilder, private usuarioService:UsuarioService, private router:Router) { 
    this.recuperarForm = this.fb.group({
      correo: new FormControl(this.usuario.correo, [Validators.required,  Validators.email])
    });
  }

  ngOnInit() {
    
  }

  recuperar(){
    const usuarioNuevo = {
      para: this.recuperarForm.get('correo').value,
      texto: (Math.floor(Math.random()*(8999)) + 1000)   
    }
    this.usuarioService.enviarEmail(usuarioNuevo).then(() => {
      this.recuperarForm = this.fb.group({
        correo: new FormControl('', [Validators.required,  Validators.email])
      });
      const usuario =  {
        correo: usuarioNuevo.para
      };
      this.usuarioService.recuperacion(usuario).then((response:any) => {
        this.usuarios = response.map((u) => {
          return u;
        });
        if(this.usuarios.length >= 1) {
          this.usuario = this.usuarios[0];
          this.usuario.pass = usuarioNuevo.texto;
          this.usuarioService.cambiarPass(this.usuario).then(() => {
            this.router.navigate(['/tabsLogin/login/cambiar']);
          })
        }
      });      
    
    });
    
  }

}
