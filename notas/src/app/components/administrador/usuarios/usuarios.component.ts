import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:any[] = [];
  usuario:any = {idUsuario: null, nombre:'', correo:'', carnet:'', tipo:''}
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  private getUsuarios() {
    this.usuarioService.getUsuarios().then((response:any) => {
      this.usuarios = response.map((user) =>{
        return user;
      });
    });
  }

  eliminarUsuario(idUsuario) {
    this.usuarioService.eliminarUsuario(idUsuario).then(() => {
      this.getUsuarios();
    });
  }

  editarUsuario(idUsuario) {
    this.usuarioService.getUsuario(idUsuario).then(() => {
      this.getUsuarios();
    });
  }
}
