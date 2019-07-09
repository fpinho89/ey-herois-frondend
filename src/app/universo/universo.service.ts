import { Universo } from './universo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UniversoService {

  private readonly API = "http://localhost:3000/universos";

  constructor(private http: HttpClient) { }

  lista() {
    return this.http.get<Universo[]>(this.API);
  }
}
