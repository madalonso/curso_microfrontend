import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicMicroComponent } from './dynamic-micro.component';

@NgModule({
  declarations: [ DynamicMicroComponent ],
  imports: [
    CommonModule
  ],
  exports: [ DynamicMicroComponent ]
})
export class DynamicMicroModule { }
