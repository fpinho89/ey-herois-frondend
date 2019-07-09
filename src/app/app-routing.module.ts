import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroiListaComponent } from './heroi/heroi-lista/heroi-lista.component';
import { HeroiFormComponent } from './heroi/heroi-form/heroi-form.component';


const routes: Routes = [
  {path: "", component: HeroiListaComponent},
  {path: "novo", component: HeroiFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
