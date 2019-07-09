import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Heroi } from '../heroi.model';
import { HeroiService } from './../heroi.service';

@Component({
  selector: 'app-heroi-form',
  templateUrl: './heroi-form.component.html',
  styleUrls: ['./heroi-form.component.css']
})
export class HeroiFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
      private heroiService: HeroiService) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null],
      poder: this.formBuilder.group({
        nome: [null]
      }),
      universo: this.formBuilder.group({
        nome: [null]
      })
    });
  }

  onSubmit() {
    //console.log(new Heroi(this.formulario.value));
    this.heroiService.add(new Heroi(this.formulario.value));
  }
}
