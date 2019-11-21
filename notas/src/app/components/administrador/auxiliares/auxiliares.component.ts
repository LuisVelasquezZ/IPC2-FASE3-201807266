import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-auxiliares',
  templateUrl: './auxiliares.component.html',
  styleUrls: ['./auxiliares.component.css']
})
export class AuxiliaresComponent implements OnInit {
  usuarios:any[] = [];
  usuario:any = {idUsuario: null, nombre:'', correo:'', carnet:'', tipo:''}
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }
  private getUsuarios() {
    this.usuarioService.getAuxiliares().then((response:any) => {
      this.usuarios = response.map((user) =>{
        return user;
      });
    });
  }
}
