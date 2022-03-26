import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './app.service';
import { ModuleLoadService } from '../shared/services/module-load.service';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MessageBusModule } from 'cross-cutting-concern';
import { DynamicMicroModule } from '../shared/dynamic-micro/dynamic-micro.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DynamicMicroModule,
    MessageBusModule.forRoot()
  ],
  providers: [
    ModuleLoadService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

