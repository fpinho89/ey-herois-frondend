import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroiListaComponent } from './heroi-lista/heroi-lista.component';
import { HeroiService } from './heroi.service';
import { HeroiFormComponent } from './heroi-form/heroi-form.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [HeroiListaComponent, HeroiFormComponent],
  exports: [HeroiListaComponent],
  providers: [HeroiService]
})
export class HeroiModule { }