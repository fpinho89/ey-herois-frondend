import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { AlertConfirmComponent } from './alert-confirm/alert-confirm.component';

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

  showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string) {
    
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertConfirmComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if (okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (<AlertConfirmComponent>bsModalRef.content).confirmResult;
  }
}