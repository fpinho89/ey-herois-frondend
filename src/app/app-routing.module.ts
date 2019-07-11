import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroiListaComponent } from './heroi/heroi-lista/heroi-lista.component';
import { HeroiFormComponent } from './heroi/heroi-form/heroi-form.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path: "", component: HeroiListaComponent},
  {path: "herois", component: HeroiListaComponent},
  {path: "novo", component: HeroiFormComponent},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
