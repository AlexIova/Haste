import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaArticoliComponent } from './component/lista-articoli/lista-articoli.component';
import { HomeComponent } from './component/home/home.component';
import { WebsocketComponent } from './component/websocket/websocket.component';
import { AstaComponent } from './component/asta/asta.component';
import { ListaSottoscrizioniComponent } from './component/lista-sottoscrizioni/lista-sottoscrizioni.component';
import { PushNotificationComponent } from './component/push-notification/push-notification.component';


const routes: Routes = [
  { path: "articoli", component: ListaArticoliComponent },
  { path: "home", component: HomeComponent },
  { path: "websocket", component: WebsocketComponent },
  { path: "asta", component: AstaComponent },
  { path: "sottoscrizioni", component: ListaSottoscrizioniComponent },
  { path: "notifiche", component: PushNotificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
