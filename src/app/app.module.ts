import { NgModule } from '@angular/core';

import { CoreModule } from './modules/core.module';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './containers/app/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
