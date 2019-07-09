import { HttpClient } from '@angular/common/http';
import { Heroi } from './heroi.model';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroiService {

  private readonly API = "http://localhost:3000/herois";

  constructor(private http: HttpClient) { }

  lista() {
    return this.http.get<Heroi[]>(this.API);
  }

  add(heroi:  Heroi) {
    this.http.post<Heroi>(this.API, heroi)//;.map(res => res)
      .subscribe(dados => {
        console.log(dados);
        //this
      },
      (error: any) => alert('erro'));
  }
}
