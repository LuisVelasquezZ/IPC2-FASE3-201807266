import { Component, OnInit } from '@angular/core';
import { ActividadService } from './../../../services/actividad.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  actividades:any[] = [];
  actividad:any = {idActividad:null, nombre:'', ponderacion:''}
  uri:string;
  constructor(private actividadService:ActividadService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uri = params["idSeccion"];
      this.getActividades(this.uri);
    });
  }

  private getActividades(idSeccion) {
    this.actividadService.getActividaes(idSeccion).then((response:any) => {
      this.actividades = response.map((actividad) =>{
        return actividad;
      });
    });
  }

  eliminarActividad(idActividad) {
    this.actividadService.eliminarActividad(idActividad).then(() => {
      this.getActividades(this.uri);
    });
  }
}
