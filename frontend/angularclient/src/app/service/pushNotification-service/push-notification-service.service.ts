import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  readonly VAPID_PUBLIC_KEY = "BPvOrzmWhDt158M6axrQdd8IUY9igrqK2N2aXeRPsgYw6-iRa4C_ZawaGJuqIYp5cOUd4MSc9bK2tZqdbYrTOv4"

  constructor( private swPush: SwPush, private http: HttpClient ) { }


  subscribeToNotifications() {

    this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then( (sub) => {
      this.sendPushSubscriptionToServer(sub);
      console.log(sub)
    })
    .catch( (err) => console.error("Could not subscribe to notifications", err));
    
  }



  private sendPushSubscriptionToServer(subscription: PushSubscription) {
    this.http.post('/pushSubscription', subscription);
  }

}
