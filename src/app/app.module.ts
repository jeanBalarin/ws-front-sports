import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoButtonModule } from '@po-ui/ng-components';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    RouterModule,
    PoTemplatesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PoButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
