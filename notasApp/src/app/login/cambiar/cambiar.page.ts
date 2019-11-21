import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar',
  templateUrl: './cambiar.page.html',
  styleUrls: ['./cambiar.page.scss'],
})
export class CambiarPage implements OnInit {

  cambiarForm: FormGroup;
  usuario:any = {correo:'', texto:'', para:''}
  usuarios:any[] = [];

  constructor(private fb:FormBuilder, private usuarioService:UsuarioService, private router:Router) { 
    this.cambiarForm = this.fb.group({
      correo: new FormControl(this.usuario.correo, [Validators.required,  Validators.email]),
      codigo: new FormControl(this.usuario.correo, [Validators.required]),
      pass: new FormControl(this.usuario.correo, [Validators.required]),
      pass2: new FormControl(this.usuario.correo, [Validators.required])
    });
  }

  ngOnInit() {
    
  }

  recuperar(){
    const usuarioNuevo = {
      correo: this.cambiarForm.get('correo').value,
      codigo: this.cambiarForm.get('codigo').value,
      pass : this.cambiarForm.get('pass').value,
      pass2: this.cambiarForm.get('pass2').value, 
    }

      this.cambiarForm = this.fb.group({
        correo: new FormControl('', [Validators.required,  Validators.email]),
        codigo: new FormControl('', [Validators.required]),
        pass: new FormControl('', [Validators.required]),
        pass2: new FormControl('', [Validators.required])
      });
      const usuario =  {
        correo: usuarioNuevo.correo
      };
      this.usuarioService.recuperacion(usuario).then((response:any) => {
        this.usuarios = response.map((u) => {
          return u;
        });
        if(this.usuarios.length >= 1) {
          this.usuario = this.usuarios[0];
          if(this.usuario.pass == usuarioNuevo.codigo) {
            if(usuarioNuevo.pass == usuarioNuevo.pass2) {
              this.usuario.pass = usuarioNuevo.pass;
              this.usuarioService.cambiarPass(this.usuario).then(() => {
              this.router.navigate(['/tabsLogin/login']);
          })
            }
          }          
          
        }
      });      
    

    
  }
}
