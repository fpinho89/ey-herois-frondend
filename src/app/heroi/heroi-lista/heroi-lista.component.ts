import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { catchError} from 'rxjs/operators';

import { HeroiService } from './../heroi.service';
import { Heroi } from '../heroi.model';
import { empty } from 'rxjs/observable/empty';

@Component({
  selector: 'heroi-lista',
  templateUrl: './heroi-lista.component.html',
  styleUrls: ['./heroi-lista.component.css']
})
export class HeroiListaComponent implements OnInit {

  herois: Observable<Heroi[]>;

  constructor(private heroiService: HeroiService,
      private alertService :  AlertModalService) { }

  ngOnInit() {
    this.herois = this.heroiService.lista().pipe(
      
      catchError(error => {
        console.error(error);
        this.handleError();
        return empty();
      })
    );
  }

  delete(id: number) {
    this.heroiService.delete(id);
  }

  handleError() {
      this.alertService.showAlertDanger('Erro ao carregar herois. Tente mais tarde.');
  }
}