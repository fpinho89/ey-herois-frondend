import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable()
export class AlertModalService {

  constructor(private bsModalService: BsModalService) { }

  private showAlert(message: string, type: AlertTypes) {

    const bsModalRef = this.bsModalService.show(AlertModalComponent);
    bsModalRef.content.message = message;
    bsModalRef.content.type = type;
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS);
  }
}