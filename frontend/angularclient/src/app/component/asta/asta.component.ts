import { Component } from '@angular/core';
import { MQService } from 'src/app/service/mqtt-service/mqtt-service.service';

@Component({
  selector: 'app-asta',
  templateUrl: './asta.component.html',
  styleUrls: ['./asta.component.css']
})
export class AstaComponent {
  
  constructor(private MQService: MQService){

  }

  test() {
    this.MQService.createConnection();
    console.log("connessione creata")
    this.MQService.doSubscribe('/quaderno/lapis', 1);
    this.MQService.doPublish('/quaderno/penna', 1, "Sono angolato");
  }


}
