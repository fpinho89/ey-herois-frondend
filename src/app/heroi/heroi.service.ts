import { HttpClient } from '@angular/common/http';
import { Heroi } from './heroi.model';
import { Injectable } from '@angular/core';
import { tap, delay, take } from 'rxjs/operators';

@Injectable()
export class HeroiService {

  private readonly API = "http://localhost:8080/herois";

  constructor(private http: HttpClient) { }

  lista() {
    return this.http.get<Heroi[]>(this.API).pipe(
      tap(console.log)
    );
  }

  add(heroi:  Heroi) {
    return this.http.post<Heroi>(this.API, heroi).pipe(take(1))
  }

  delete(id:number) {
    return this.http.delete<Heroi>(this.API+"/"+id).pipe(take(1));
  }
}
