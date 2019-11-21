import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import {ActividadService} from './../../../services/actividad.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
