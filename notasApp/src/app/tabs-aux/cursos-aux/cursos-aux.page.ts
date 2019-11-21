import { Component, OnInit } from '@angular/core';
import { SeccionService } from './../../services/seccion.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cursos-aux',
  templateUrl: './cursos-aux.page.html',
  styleUrls: ['./cursos-aux.page.scss'],
})
export class CursosAuxPage implements OnInit {

  secciones:any[] = [];
  uri:any;
  constructor(private seccionService:SeccionService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.uri = JSON.parse(localStorage.getItem("usuario"));
    this.getSecciones(this.uri.idUsuario);
  }

  private getSecciones(idUsuario) {
    this.seccionService.getSeccionesAux(idUsuario).then((response:any) => {
      this.secciones = response.map((seccion) =>{
        return seccion;
      });
    });
  }

}
