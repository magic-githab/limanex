import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './component/auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [SharedModule, AuthRoutingModule]
})
export class AuthModule {}
