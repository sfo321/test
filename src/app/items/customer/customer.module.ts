import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../../common/common.module';
import { CustomerRoutingModule } from './customer.routing.module';
import { CustomerComponent } from './customer.component';



@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CustomerRoutingModule,
    AppCommonModule,
    CommonModule
  ]
})
export class CustomerModule { }
