import { Component } from '@angular/core';
import { Articolo } from 'src/app/model/articolo/articolo'; 
import { ArticoloService } from 'src/app/service/articolo-service/articolo-service.service';

@Component({
  selector: 'app--alistarticoli',
  templateUrl: './lista-articoli.component.html',
  styleUrls: ['./lista-articoli.component.css']
})

export class ListaArticoliComponent {

  articoli: Articolo[] | undefined;

  constructor(private articoloService: ArticoloService){

  }

  ngOnInit(){
    this.articoloService.findall().subscribe(data => {
      this.articoli = data;
    });
  }


}
