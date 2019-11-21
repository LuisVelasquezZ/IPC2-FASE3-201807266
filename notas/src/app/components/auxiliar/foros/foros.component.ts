import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import { ForoService } from './../../../services/foro.service';
import { ComentarioService } from './../../../services/comentario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foros',
  templateUrl: './foros.component.html',
  styleUrls: ['./foros.component.css']
})
export class ForosComponent implements OnInit {
  foros:any[] = [];
  comentarios:any[] = [];
  uri:any;
  idforo:any;
  comentarioForm: FormGroup;
  constructor(private foroService:ForoService,
    private fb:FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private comentarioService:ComentarioService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uri = params["idSeccion"];
      this.getForos(this.uri);
    });

    this.comentarioForm = this.fb.group({
      contenido: new FormControl('', Validators.required)
    });
  }

  private getForos(idSeccion) {
    this.foroService.getForos(idSeccion).then((response:any) => {
      this.foros = response.map((seccion) =>{
        return seccion;
      });
    });
  }

  private getComentarios(idForo) {
    this.idforo = idForo;
    this.comentarioService.getComentarios(idForo).then((response:any) => {
      this.comentarios = response.map((comentario) => {
        return comentario;
      })
    });
  }

  private getId(id) {
    if(id == this.idforo) {
      return true;
    } else {
      return false;
    }
    
  }

  agregarComentario(idPublicacion){
    const comentarioNuevo = {
      idPublicacion: idPublicacion,
      contenido: this.comentarioForm.get('contenido').value,
      idUsuario: JSON.parse(localStorage.getItem("usuario")).idUsuario
    }
    this.comentarioService.crearComentario(comentarioNuevo).then(() =>{
      this.getForos(this.uri);
      this.getComentarios(idPublicacion);
      this.comentarioForm = this.fb.group({
        contenido: new FormControl('', Validators.required)
      });
    })
  }
  

}
