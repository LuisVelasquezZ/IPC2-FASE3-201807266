import { Component, OnInit } from '@angular/core';
import { AsignacionService } from '../../../services/asignacion.service'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  usuarios:any[] = [];
  uri:string;
  usuario:any = {idUsuario: null, nombre:'', correo:'', carnet:'', tipo:''}
  constructor(private asignacionService:AsignacionService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uri = params["idSeccion"];
      this.getUsuarios(this.uri);
    });
    
  }

  private getUsuarios(idSeccion) {
    this.asignacionService.getAsignacionesAux(idSeccion).then((response:any) => {
      this.usuarios = response.map((user) =>{
        return user;
      });
    });
  }

}
