import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { AlertConfirmComponent } from './alert-confirm/alert-confirm.component';
import { AlertModalService } from './alert-modal.service';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AlertModalComponent, AlertConfirmComponent, CampoControlErroComponent],
  exports: [AlertModalComponent, AlertConfirmComponent, CampoControlErroComponent],
  entryComponents: [AlertModalComponent, AlertConfirmComponent],
  providers: [AlertModalService]
})
export class SharedModule { }
