import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { catchError, take, switchMap} from 'rxjs/operators';

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

    this.onRefresh();
    
  }

  onRefresh() {
    this.herois = this.heroiService.lista().pipe(
      catchError(error => {
        console.error(error);
        this.handleError();
        return empty();
      })
    );
  }

  onDelete(heroi: Heroi) {
    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover esse herói?');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.heroiService.delete(heroi.id) : empty())
    )
    .subscribe(
      success => {
        this.onRefresh();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover o heroi. Tente novamente mais tarde.');
      }
    );
  }

  handleError() {
      this.alertService.showAlertDanger('Erro ao carregar herois. Tente mais tarde.');
  }
}