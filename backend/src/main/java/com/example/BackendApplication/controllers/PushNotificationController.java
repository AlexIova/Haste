package com.example.BackendApplication.controllers;


import com.example.BackendApplication.entities.PushSubscriptionEntity;
import com.example.BackendApplication.repositories.PushSubscriptionsRepository;
import com.example.BackendApplication.services.PushNotificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PushNotificationController {

    private final PushSubscriptionsRepository pnsRepository;

    public PushNotificationController(PushSubscriptionsRepository pnsRepository) {
        this.pnsRepository = pnsRepository;
    }

    @PostMapping("/pushSubscription")
    public ResponseEntity<String> saveSubscription(@RequestBody PushSubscriptionEntity subscription){
        System.out.println("arrivato qualcosa!");
        // Save the subscription into the database
        pnsRepository.save(subscription);
        System.out.println(subscription);
        return ResponseEntity.ok("Subscription saved");
    }

    @GetMapping("/sendPush")
    public ResponseEntity<String> sendPush(){
        Iterable<PushSubscriptionEntity> subscriptionList = pnsRepository.findAll();
        PushSubscriptionEntity subscription = subscriptionList.iterator().next();

        System.out.println("Ora dovrei mandare: " + subscription);

        PushNotificationService pushNotificationService = new PushNotificationService(subscription);

        pushNotificationService.sendPushNotification("Hello from the other side!");

        return ResponseEntity.ok("Sent push");
    }
}
