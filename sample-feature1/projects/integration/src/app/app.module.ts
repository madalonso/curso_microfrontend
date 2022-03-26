import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Feature1Module } from 'projects/sample-feature1/src/lib';
import { MessageBusModule } from 'cross-cutting-concern';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Feature1Module,
    MessageBusModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
