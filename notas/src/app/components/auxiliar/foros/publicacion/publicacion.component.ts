import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import { ForoService} from './../../../../services/foro.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  foroForm: FormGroup;
  curso: any = {idCurso: '', nombre: '', descripion: ''}
  foroEdit: any  = {};
  uri:string;
  uriList:any;
  idSeccion:string;
  constructor(
    private fb:FormBuilder,
    private foroService: ForoService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.foroForm = this.fb.group({
      titulo: new FormControl('', Validators.required),
      fechaLimite: new FormControl('', Validators.required),
      contenido: new FormControl('', Validators.required)
    });
    
    this.activatedRoute.params.subscribe(params => {
      this.idSeccion = params["idPublicacion"];
      this.uriList = params["idPublicacion"].split("-", 2);
      this.uri = this.uriList[0];
      if(this.uri !== "nuevo") {
        this.foroService.getForo(params["idPublicacion"])
        .then(foros => {
          this.foroEdit = foros[0];
          this.foroForm = this.fb.group({
            titulo: new FormControl(this.foroEdit.titulo, Validators.required),
            fechaLimite: new FormControl(this.foroEdit.fechalimite, Validators.required),
            contenido: new FormControl(this.foroEdit.contenido, Validators.required)
          });
        });
      } else {
        this.foroForm = this.fb.group({
          titulo: new FormControl('', Validators.required),
          fechaLimite: new FormControl('', Validators.required),
          contenido: new FormControl('', Validators.required)
        });
      }
    });
  }

  agregarPublicacion(){
    const foroNuevo = {
      idPublicacion: '',
      fechaLimite: this.foroForm.get('fechaLimite').value,
      titulo: this.foroForm.get('titulo').value,
      contenido: this.foroForm.get('contenido').value,
      idUsuario: JSON.parse(localStorage.getItem("usuario")).idUsuario,
      idSeccion: this.uriList[1]
    }
    if(this.uri == "nuevo") {      
    this.foroService.crearForo(foroNuevo).then(() => {
      this.router.navigate(['/auxiliar/foros', this.uriList[1]]);
    });
    } else {
      foroNuevo.idSeccion = this.uri;
      this.foroService.actualizarForo(foroNuevo).then(() => {
        this.router.navigate(['/auxiliar/foros', this.uriList[1]]);
      })
    }
  }

}
