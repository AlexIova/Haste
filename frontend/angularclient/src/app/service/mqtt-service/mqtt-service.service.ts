import { Injectable } from '@angular/core';
import { IMqttServiceOptions, IPublishOptions, IMqttMessage, MqttService } from 'ngx-mqtt';
import { IClientSubscribeOptions } from 'mqtt-browser';
import { Subscription } from 'rxjs';


@Injectable()
export class MQService {

  wsBroker: string = "localhost";
  wsPort: number = 15675;

  connection = {
    hostname: this.wsBroker,
    port: this.wsPort,
    clean: false,
    protocol: 'ws',
    clientId: '42',
    path: "/ws"
  };

  qosList = [
    { label: 0, value: 0 },
    { label: 1, value: 1 },
    { label: 2, value: 2 },
  ];

  private curSubscription!: Subscription;

  private client!: MqttService;

  private ricevuto: string = "";

  constructor() { 
    this.client = new MqttService(this.connection as IMqttServiceOptions);
  }


  createConnection() {
    
    this.client.connect(this.connection as IMqttServiceOptions);
    console.log(this.client)

    this.client.onConnect.subscribe( () => {
      console.log("Connection succeded!");
    });

    this.client.onError.subscribe( (error: any) => {
      console.log('Connection failed', error);
    })

      this.client.onMessage.subscribe((packet: any) => {
        this.ricevuto = this.ricevuto.concat(packet.payload.toString())
        console.log(`Received message ${packet.payload.toString()} from topic ${packet.topic}`)
    })


  }


  doSubscribe(topic: string, qos: number) {
    this.curSubscription = this.client.observe(topic, { qos } as IClientSubscribeOptions).subscribe((message: IMqttMessage) => {
      console.log('Subscribe to topics res: ', message.payload.toString())
   })
  }

  doUnSubscribe() {
    this.curSubscription.unsubscribe()
  }

  doPublish(topic: string, qos: number, payload: string){
    this.client.unsafePublish(topic, payload, { qos } as IPublishOptions);
    console.log(`Pubblicato su ${topic} con qos: ${qos} e payload: ${payload}`);
  }

  destroyConnection() {
    try {
      this.client.disconnect(true)
      console.log('Successfully disconnected!')
    } catch (error: any) {
      console.log('Disconnect failed', error.toString())
    }
  }

  getClient(): MqttService {
    return this.client!
  }

  getRicevuto(): string {
    return this.ricevuto
  }

}
