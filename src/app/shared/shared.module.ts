import { AlertModalService } from './alert-modal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertModalComponent],
  exports: [AlertModalComponent],
  entryComponents: [AlertModalComponent],
  providers: [AlertModalService]
})
export class SharedModule { }
