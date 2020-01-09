import { NgModule } from '@angular/core';

import { MainRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from '@app/modules/admin/component/admin.component';

import { ContactsService } from '@app/services';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {
  ContactsTableComponent,
  ContactsFilterComponent,
  CreateContactComponent,
  HeaderComponent,
  SidebarComponent
} from '@app/components';

import { ContactsComponent } from '@app/pages/contacts/contacts.component';

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
  imports: [SharedModule, MainRoutingModule, InfiniteScrollModule],
  providers: [ContactsService]
})
export class AdminModule {}
