import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable()
export class WebsocketService {

  private socket: WebSocketSubject<any>;
  private url: string = "ws://localhost:8080/ws"

  constructor() {
    this.socket = webSocket(this.url);
  }

  getSocket(): WebSocketSubject<any> {
    return this.socket;
  }

  getUrl(): string {
    return this.url;
  }

}
