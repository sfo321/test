import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicRoutingModule } from './dynamic.routing.module';
import { DynamicComponent } from './dynamic.component';
import { AppCommonModule } from '../../common/common.module';



@NgModule({
  declarations: [DynamicComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    DynamicRoutingModule,
  ]
})
export class DynamicModule { }
