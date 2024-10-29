import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecRoutingModule } from './tec-routing.module';
import { TecComponent } from './tec/tec.component';


@NgModule({
  declarations: [
    TecComponent
  ],
  imports: [
    CommonModule,
    TecRoutingModule
  ]
})
export class TecModule { }
