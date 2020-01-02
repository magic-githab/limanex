import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  providers: []
})
export class SharedModule {}
