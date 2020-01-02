import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MainTableComponent } from '../../components/main-table/main-table.component';

@NgModule({
  declarations: [MainTableComponent],
  imports: [SharedModule, InfiniteScrollModule],
  exports: [SharedModule, InfiniteScrollModule, MainTableComponent]
})
export class MainSharedModule {}
