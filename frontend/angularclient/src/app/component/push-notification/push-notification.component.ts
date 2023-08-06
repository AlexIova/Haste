import { Component } from '@angular/core';
import { PushNotificationService } from 'src/app/service/pushNotification-service/push-notification-service.service';

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.css']
})
export class PushNotificationComponent {

  constructor(private pnt: PushNotificationService){

  }


  test(){
    this.pnt.subscribeToNotifications();
  }


}
