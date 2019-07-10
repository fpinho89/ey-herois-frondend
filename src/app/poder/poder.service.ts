import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Poder } from './poder.model';

@Injectable()
export class PoderService {

  private readonly API = "http://localhost:8080/poderes";

  constructor(private http : HttpClient) { }

  lista() {
    return this.http.get<Poder[]>(this.API);
  }
}
