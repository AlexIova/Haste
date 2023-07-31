import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/service/subscribe-service/subscribe-service.service';

@Component({
  selector: 'app-lista-sottoscrizioni',
  templateUrl: './lista-sottoscrizioni.component.html',
  styleUrls: ['./lista-sottoscrizioni.component.css']
})
export class ListaSottoscrizioniComponent {

  listaId!: Number[];

  constructor(private subscribeService: SubscribeService) {  
  }

  ngOnInit(){
    this.listaId = this.subscribeService.getLista();
  }


}
