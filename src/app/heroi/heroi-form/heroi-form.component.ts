import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Heroi } from '../heroi.model';
import { HeroiService } from './../heroi.service';
import { Universo } from './../../universo/universo.model';
import { UniversoService } from './../../universo/universo.service';
import { Poder } from '../../poder/poder.model';
import { PoderService } from './../../poder/poder.service';

@Component({
  selector: 'app-heroi-form',
  templateUrl: './heroi-form.component.html',
  styleUrls: ['./heroi-form.component.css']
})
export class HeroiFormComponent implements OnInit {

  formulario: FormGroup;

  universos: Observable<Universo[]>;
  poderes: Observable<Poder[]>;

  constructor(private formBuilder: FormBuilder,
      private heroiService: HeroiService,
      private universoService: UniversoService,
      private poderService: PoderService,
      private router: Router) { }

  ngOnInit() {

    this.universos = this.universoService.lista();
    this.poderes = this.poderService.lista();

    this.formulario = this.formBuilder.group({
      nome: [null],
      poderes: [null],
      universo: [null]
    });
  }

  onSubmit() {
    //console.log(new Heroi(this.formulario.value));
    this.heroiService.add(new Heroi(this.formulario.value));
    this.router.navigate(["/herois"]);
  }
}
