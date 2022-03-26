import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature2Component } from './feature2.component';
import { DynamicMicroModule } from '../../shared/dynamic-micro/dynamic-micro.module';

const routes: Routes = [
  {
    path: '',
    component: Feature2Component
  }
];

@NgModule({
  imports: [DynamicMicroModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }
