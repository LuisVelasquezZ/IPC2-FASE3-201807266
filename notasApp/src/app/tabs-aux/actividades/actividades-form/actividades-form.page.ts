import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import { ActividadService } from './../../../services/actividad.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actividades-form',
  templateUrl: './actividades-form.page.html',
  styleUrls: ['./actividades-form.page.scss'],
})
export class ActividadesFormPage implements OnInit {

  actividadForm: FormGroup;
  actividad: any = {idActividad: '', nombre: '', idSeeccion: '', ponderacion: ''}
  actividadEdit: any  = {};
  uri:string;
  uriList: string;
  idSeccion:string;
  idActividad:string;
  constructor(
    private fb:FormBuilder,
    private actividadService: ActividadService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.actividadForm = this.fb.group({
      nombre: new FormControl('', Validators.required),
      ponderacion: new FormControl('', Validators.required)
    });

    this.activatedRoute.params.subscribe(params => {
      this.idActividad = params["idSeccion"];
      this.uriList = params["idSeccion"].split("-", 2);
      this.uri = this.uriList[0];
      if(this.uri !== "nuevo") {
        this.actividadService.getActividaes(this.uri)
        .then(actividades => {
          this.actividadEdit = actividades[0];
          this.idSeccion = this.actividadEdit.idSeccion;
          this.actividadForm = this.fb.group({
            nombre: new FormControl(this.actividadEdit.nombre, Validators.required),
            ponderacion: new FormControl(this.actividadEdit.ponderacion, Validators.required)
          });
        });
      } else {
        this.actividadForm = this.fb.group({
          nombre: new FormControl('', Validators.required),
          ponderacion: new FormControl('', Validators.required)
        });
      }
    });
  }

  agregarActividad(){
    const actividadNuevo = {
      idActividad: '',
      idSeccion: this.uriList[1],
      nombre: this.actividadForm.get('nombre').value,
      ponderacion: this.actividadForm.get('ponderacion').value
    }
    if(this.uri == "nuevo") {     
    this.actividadService.crearActividad(actividadNuevo).then(() => {
      this.router.navigate(['/tabs-aux/actividades', this.uriList[1]]);
    });
    } else {
      actividadNuevo.idActividad = this.uri;
      actividadNuevo.idSeccion = this.idSeccion;
      this.actividadService.actualizarActividad(actividadNuevo).then(() => {
        this.router.navigate(['/tabs-aux/actividades', this.idSeccion]);
      })
    }
  }

}
