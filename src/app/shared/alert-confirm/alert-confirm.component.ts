import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-confirm',
  templateUrl: './alert-confirm.component.html',
  styleUrls: ['./alert-confirm.component.css']
})
export class AlertConfirmComponent implements OnInit {

  @Input() title: string;
  @Input() msg: string;
  @Input() cancelTxt = 'Não';
  @Input() okTxt = 'Sim';

  confirmResult: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.confirmResult = new Subject();
  }

  onConfirm() {
    this.confirmAndClose(true);
  }

  onClose() {
    this.confirmAndClose(false);
  }

  private confirmAndClose(value: boolean) {
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }
}
