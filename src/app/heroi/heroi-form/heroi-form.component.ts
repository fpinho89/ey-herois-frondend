import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Heroi } from '../heroi.model';
import { HeroiService } from './../heroi.service';
import { Universo } from './../../universo/universo.model';
import { UniversoService } from './../../universo/universo.service';
import { Poder } from '../../poder/poder.model';
import { PoderService } from './../../poder/poder.service';
import { AlertModalService } from '../../shared/alert-modal.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-heroi-form',
  templateUrl: './heroi-form.component.html',
  styleUrls: ['./heroi-form.component.css']
})
export class HeroiFormComponent implements OnInit {

  formulario: FormGroup;

  universos: Observable<Universo[]>;
  poderes: Observable<Poder[]>;

  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'nome',
    selectAllText: 'Selecionar todos',
    unSelectAllText: 'Selecionar todos',
    itemsShowLimit: 30
};

  constructor(private formBuilder: FormBuilder,
      private heroiService: HeroiService,
      private universoService: UniversoService,
      private poderService: PoderService,
      private modal: AlertModalService,
      private location: Location,
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {

    this.universos = this.universoService.lista();
    this.poderes = this.poderService.lista();

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      poderes: [null, Validators.required],
      universo: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
     
      let msgSuccess = 'Heroi criado com sucesso!';
      let msgError = 'Erro ao criar heroi, tente novamente!';

      this.heroiService.add(this.formulario.value).pipe(
        take(1)
      )
      .subscribe(
        success => {
          this.modal.showAlertSuccess(msgSuccess);
          this.router.navigate(['/herois']);
        },
        error => this.modal.showAlertDanger(msgError)
      );      
    }
  }

  verificaValidTouched(campo){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;  
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }
}