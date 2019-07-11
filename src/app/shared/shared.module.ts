import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { AlertConfirmComponent } from './alert-confirm/alert-confirm.component';
import { AlertModalService } from './alert-modal.service';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AlertModalComponent, AlertConfirmComponent, CampoControlErroComponent, NotFoundComponent],
  exports: [AlertModalComponent, AlertConfirmComponent, CampoControlErroComponent, NotFoundComponent],
  entryComponents: [AlertModalComponent, AlertConfirmComponent],
  providers: [AlertModalService]
})
export class SharedModule { }
