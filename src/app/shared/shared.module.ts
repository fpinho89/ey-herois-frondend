import { AlertModalService } from './alert-modal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { AlertConfirmComponent } from './alert-confirm/alert-confirm.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertModalComponent, AlertConfirmComponent],
  exports: [AlertModalComponent, AlertConfirmComponent],
  entryComponents: [AlertModalComponent, AlertConfirmComponent],
  providers: [AlertModalService]
})
export class SharedModule { }
