import { Component, OnInit } from '@angular/core';
import { SeccionService } from './../../../../services/seccion.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-seccion-aux',
  templateUrl: './seccion-aux.component.html',
  styleUrls: ['./seccion-aux.component.css']
})
export class SeccionAuxComponent implements OnInit {
  secciones:any[] = [];
  uri:string;
  constructor(private seccionService:SeccionService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uri = params["idUsuario"];
      this.getSecciones(this.uri)
    });
    
  }

  private getSecciones(idUsuario) {
    this.seccionService.getSeccionesAux(idUsuario).then((response:any) => {
      this.secciones = response.map((seccion) =>{
        return seccion;
      });
    });
  }
}
