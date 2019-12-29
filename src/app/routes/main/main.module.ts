import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './component/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ContactsService } from './services/contacts.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LanguagePipe } from '../../shared/pipes/language.pipe';


@NgModule({
  declarations: [MainComponent, LanguagePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    InfiniteScrollModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [ContactsService]
})
export class MainModule { }
