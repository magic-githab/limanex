import { NgModule } from '@angular/core';

import { CoreModule } from './core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
