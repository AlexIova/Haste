import { Component } from '@angular/core';
import { PushNotificationService } from 'src/app/service/pushNotification-service/push-notification-service.service';

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.css']
})
export class PushNotificationComponent {

  showNotificationButton: boolean = false;

  constructor(private pnt: PushNotificationService){

  }


  test1(){
    this.pnt.subscribeToNotifications();
  }

  test2(){
    this.pnt.askForNotification();
    console.log("ho chiesto per la notifica");
  }


}
