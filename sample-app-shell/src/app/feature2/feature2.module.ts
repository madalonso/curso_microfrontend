import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature2Component } from './feature2.component';
import { Feature2RoutingModule } from './feature2-routing.module';
import { DynamicMicroModule } from '../../shared/dynamic-micro/dynamic-micro.module';

@NgModule({
  declarations: [Feature2Component],
  imports: [
    CommonModule,
    Feature2RoutingModule,
    DynamicMicroModule
  ]
})
export class Feature2Module { }
