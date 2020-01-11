import { NgModule } from '@angular/core';

import { AuthRoutingModule } from '@routes/.';
import { AuthComponent } from '@containers/.';

import { SharedModule } from './shared.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [SharedModule, AuthRoutingModule]
})
export class AuthModule {}
