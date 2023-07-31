import { NgModule, isDevMode } from '@angular/core';
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
import { ListaSottoscrizioniComponent } from './component/lista-sottoscrizioni/lista-sottoscrizioni.component';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    ListaArticoliComponent,
    HomeComponent,
    WebsocketComponent,
    AstaComponent,
    ListaSottoscrizioniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    ArticoloService,
    WebsocketService,
    MQService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
