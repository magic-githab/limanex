import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TranslateModule,
    NgxSmartModalModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TranslateModule,
    NgxSmartModalModule
  ]
})
export class SharedModule {}
