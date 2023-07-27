import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaArticoliComponent } from './component/lista-articoli/lista-articoli.component';
import { HomeComponent } from './component/home/home.component';
import { WebsocketComponent } from './component/websocket/websocket.component';


const routes: Routes = [
  { path: "articoli", component: ListaArticoliComponent },
  { path: "home", component: HomeComponent },
  { path: "websocket", component: WebsocketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
