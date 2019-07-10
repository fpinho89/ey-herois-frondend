import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HeroiListaComponent } from './heroi-lista/heroi-lista.component';
import { HeroiService } from './heroi.service';
import { HeroiFormComponent } from './heroi-form/heroi-form.component';
import { AppRoutingModule } from '../app-routing.module';
import { UniversoModule } from './../universo/universo.module';
import { PoderModule } from './../poder/poder.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    UniversoModule,
    PoderModule,
    SharedModule,
    NgMultiSelectDropDownModule
  ],
  declarations: [HeroiListaComponent, HeroiFormComponent],
  exports: [HeroiListaComponent],
  providers: [HeroiService]
})
export class HeroiModule { }