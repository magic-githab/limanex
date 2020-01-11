import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import {
  ContactsTableComponent,
  ContactsFilterComponent,
  CreateContactComponent,
  HeaderComponent,
  SidebarComponent
} from '@components/.';

import { ContactsComponent } from '@pages/.';
import { AdminComponent } from '@containers/.';
import { AdminRoutingModule } from '@routes/.';
import { ContactsService } from '@services/.';

import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    ContactsComponent,
    ContactsTableComponent,
    ContactsFilterComponent,
    CreateContactComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    InfiniteScrollModule,
    AutocompleteLibModule
  ],
  providers: [ContactsService]
})
export class AdminModule {}
