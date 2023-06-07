import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsemplariComponent } from './esemplari/esemplari.component';
import { VascaComponent } from './vasca/vasca.component';
import { AcquarioComponent } from './acquario/acquario.component';
import { SaleComponent } from './sale/sale.component';

@NgModule({
  declarations: [
    AppComponent,
    EsemplariComponent,
    VascaComponent,
    AcquarioComponent,
    SaleComponent
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
