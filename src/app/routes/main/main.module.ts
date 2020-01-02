import { NgModule } from '@angular/core';

import { MainSharedModule } from './shared/modules/main-shared/main-shared.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './component/main.component';

import { ContactsService } from './services/contacts/contacts.service';
import { MainHeaderComponent } from './component/components/main-header/main-header.component';
import { MainSidebarComponent } from './component/components/main-sidebar/main-sidebar.component';

@NgModule({
  declarations: [MainComponent, MainHeaderComponent, MainSidebarComponent],
  imports: [MainSharedModule, MainRoutingModule],
  providers: [ContactsService]
})
export class MainModule {}
