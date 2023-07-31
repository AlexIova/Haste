import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WebsocketService } from 'src/app/service/websocket-service/websocket-service.service';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css']
})

export class WebsocketComponent {

  contenuto: any[] = [];

  constructor(private webSocketService: WebsocketService){

  }

  ngOnInit(){
    const socket = this.webSocketService.getSocket();

    socket.subscribe( {
      next: (message) => {
        this.contenuto.push(message);
        console.log("Arrivato messaggio!");
      }, 
      error: (error) => {
        console.error('WebSocket error:', error);
      }, 
      complete: () => {
        console.log("WebSocket connection closed")
      }
    });

  }

  sendMessage() {
    const message = { "type": "chat", "content": "Ciao, sono Angular!" }
    this.webSocketService.getSocket().next(message);
    this.contenuto.push(message);
  }

}
