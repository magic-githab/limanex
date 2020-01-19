import { NgModule } from '@angular/core';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {
  HeaderComponent,
  SidebarComponent,
  ContactsFilterComponent,
  CreateContactComponent,
  ContactsTableComponent
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
    ContactsFilterComponent,
    CreateContactComponent,
    ContactsTableComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    NgxDatatableModule,
    InfiniteScrollModule,
    InfiniteScrollModule
  ],
  providers: [ContactsService]
})
export class AdminModule {}
