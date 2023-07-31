import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaArticoliComponent } from './component/lista-articoli/lista-articoli.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticoloService } from './service/articolo-service/articolo-service.service';
import { HomeComponent } from './component/home/home.component';

import { ReactiveFormsModule } from "@angular/forms";
import { WebsocketComponent } from './component/websocket/websocket.component';
import { WebsocketService } from './service/websocket-service/websocket-service.service';
import { AstaComponent } from './component/asta/asta.component';
import { MQService } from './service/mqtt-service/mqtt-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ListaArticoliComponent,
    HomeComponent,
    WebsocketComponent,
    AstaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ArticoloService,
    WebsocketService,
    MQService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
