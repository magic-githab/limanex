import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  ButtonComponent,
  InputComponent,
  ModalComponent,
  InputPhoneComponent
} from '@components/.';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    ModalComponent,
    InputPhoneComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TranslateModule,
    NgxSmartModalModule,
    ToastrModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TranslateModule,
    NgxSmartModalModule,
    ToastrModule,
    NgbModule,
    ButtonComponent,
    InputComponent,
    InputPhoneComponent,
    ModalComponent
  ]
})
export class SharedModule {}
