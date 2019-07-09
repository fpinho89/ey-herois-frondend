import { Component, OnInit } from '@angular/core';

import { HeroiService } from './../heroi.service';
import { Observable } from 'rxjs/Observable';
import { Heroi } from '../heroi.model';

@Component({
  selector: 'heroi-lista',
  templateUrl: './heroi-lista.component.html',
  styleUrls: ['./heroi-lista.component.css']
})
export class HeroiListaComponent implements OnInit {

  herois: Observable<Heroi[]>;

  constructor(private heroiService: HeroiService) { }

  ngOnInit() {
    this.herois = this.heroiService.lista();
  }

}
