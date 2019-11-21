import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  usuario:any = {correo:'', pass:''}
  usuarios:any[] = [];

  constructor(private fb:FormBuilder, private loginService:LoginService, private router:Router) { 
    this.loginForm = this.fb.group({
      correo: new FormControl(this.usuario.correo, [Validators.required,  Validators.email]),
      pass: new FormControl(this.usuario.pass, Validators.required)
    });
  }

  ngOnInit() {
    
  }

  autenticar(){
    const usuario =  {
      correo: this.loginForm.get('correo').value,
      pass: this.loginForm.get('pass').value
    }
    this.loginService.loginUsuario(usuario).then((response:any) => {
      this.usuarios = response.map((u) => {
        return u;
      });
      if(this.usuarios.length >= 1) {
        this.usuario = this.usuarios[0];
        if(this.usuario.tipo == "Administrador") {          
          localStorage.setItem("usuario", JSON.stringify(this.usuario));
          console.log("acceso");
          //this.router.navigate(['/administrador']);
        } else if(this.usuario.tipo == "Auxiliar") {
          localStorage.setItem("usuario", JSON.stringify(this.usuario));
          this.router.navigate(['/tabs-aux']);
          console.log("acceso");
        } else if(this.usuario.tipo == "Alumno") {
          localStorage.setItem("usuario", JSON.stringify(this.usuario));
          //this.router.navigate(['/alumno']);
          console.log("acceso");
        }
      }
    });
    
  }
}
