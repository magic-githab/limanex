import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainSharedModule } from './../../shared/modules/main-shared/main-shared.module';
import { MainContactsFilterComponent } from './component/components/main-contacts-filter/main-contacts-filter.component';
import { MainContactsComponent } from './component/main-contacts.component';

@NgModule({
  declarations: [MainContactsComponent, MainContactsFilterComponent],
  imports: [
    MainSharedModule,
    RouterModule.forChild([{ path: '', component: MainContactsComponent }])
  ]
})
export class MainContactsModule {}
