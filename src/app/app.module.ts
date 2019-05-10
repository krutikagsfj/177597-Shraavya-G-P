import { DataTableModule } from 'angular-6-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { SuccessComponent } from './success/success.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ReactiveFormsModule,AppRoutingModule,DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
