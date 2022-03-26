import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature1Component } from './feature1.component';
import { DynamicMicroModule } from '../../shared/dynamic-micro/dynamic-micro.module';

const routes: Routes = [
  {
    path: '',
    component: Feature1Component
  }
];

@NgModule({
  imports: [DynamicMicroModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule { }
