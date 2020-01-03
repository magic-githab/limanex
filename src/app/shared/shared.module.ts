import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TranslateModule
  ],
  providers: []
})
export class SharedModule {}
