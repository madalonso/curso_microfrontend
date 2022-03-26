import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageBusModule } from 'cross-cutting-concern';
import { Feature2Module } from 'projects/sample-feature2/src/lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Feature2Module,
    MessageBusModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
