import { Injectable } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Injectable()
export class ModalsService {
  constructor(private modals: NgxSmartModalService) {}

  public openModal = modal => this.modals.getModal(modal).open();
  public closeModal = modal => this.modals.getModal(modal).close();
}
