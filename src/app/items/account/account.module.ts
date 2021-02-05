import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AppCommonModule } from '../../common/common.module';
import { AccountRoutingModule } from './account.routing.module';



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
