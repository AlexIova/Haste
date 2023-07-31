import { Component } from '@angular/core';
import { Articolo } from 'src/app/model/articolo/articolo'; 
import { ArticoloService } from 'src/app/service/articolo-service/articolo-service.service';
import { SubscribeService } from 'src/app/service/subscribe-service/subscribe-service.service';

@Component({
  selector: 'app--alistarticoli',
  templateUrl: './lista-articoli.component.html',
  styleUrls: ['./lista-articoli.component.css']
})

export class ListaArticoliComponent {

  articoli: Articolo[] | undefined;

  constructor(private articoloService: ArticoloService, 
              private subscribeService: SubscribeService){
  }

  ngOnInit(){
    this.articoloService.findall().subscribe(data => {
      this.articoli = data;
    });
  }


  sottoscrivi(id: string): void{
    let nId = parseInt(id);
    if( !this.subscribeService.checkIn(nId) ) {
      this.subscribeService.addId(nId);
    }
  }


}
