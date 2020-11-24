import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CrickInfoComponent } from './crick-info/crick-info.component';
import { LiveUpdateComponent } from './crick-info/live-update/live-update.component';
import { ResultComponent } from './crick-info/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    CrickInfoComponent,
    LiveUpdateComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
