import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubWId } from 'src/app/model/subWId/sub-wid';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  private urlBackend: string = "http://localhost:8080"

  readonly VAPID_PUBLIC_KEY = "BPvOrzmWhDt158M6axrQdd8IUY9igrqK2N2aXeRPsgYw6-iRa4C_ZawaGJuqIYp5cOUd4MSc9bK2tZqdbYrTOv4"

  constructor( private swPush: SwPush, private http: HttpClient ) { }


  subscribeToNotifications() {

    this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then( (sub) => {
      this.sendPushSubscriptionToServer(sub);
    })
    .catch( (err) => console.error("Could not subscribe to notifications", err));
    
    self.addEventListener("push", (event) => {
      console.log(event);
    })

  }

  private sendPushSubscriptionToServer(subscription: PushSubscription) {
    // const sub: SubWId = new SubWId(subscription.endpoint, this.arrayBufferToBase64(subscription.getKey('auth')));

    const sub: SubWId = new SubWId(subscription);

    console.log(sub)

    const requestOptions: Object = {
      responseType: 'text'
    }

    this.http.post<string>( this.urlBackend + '/pushSubscription', sub, requestOptions ).subscribe({
      next: (response) => {
        console.log(`Response received: ${response}`);
      },
      error: (error) => {
        console.error("Error: ", error);
      }
    });
  }


  askForNotification(){

    const requestOptions: Object = {
      responseType: 'text'
    }

    this.http.get(this.urlBackend + "/sendPush", requestOptions).subscribe({
      next: (response) => {
        console.log(`Response received: ${response}`);
      },
      error: (error) => {
        console.error("Error: ", error);
      }
    });

  }


}
