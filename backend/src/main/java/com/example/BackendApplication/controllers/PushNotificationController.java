package com.example.BackendApplication.controllers;


import com.example.BackendApplication.entities.PushSubscriptionEntity;
import com.example.BackendApplication.repositories.PushSubscriptionsRepository;
import com.example.BackendApplication.services.PushNotificationService;
import com.google.gson.Gson;
import nl.martijndwars.webpush.Subscription;
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
    public ResponseEntity<String> saveSubscription(@RequestBody PushSubscriptionEntity subscriptionEntity){
        System.out.println("arrivato qualcosa!");
        // Save the subscription into the database
        pnsRepository.save(subscriptionEntity);
        System.out.println("salvando: " + subscriptionEntity);
        return ResponseEntity.ok("Subscription saved");
    }

    @GetMapping("/sendPush")
    public ResponseEntity<String> sendPush(){
        Iterable<PushSubscriptionEntity> subscriptionList = pnsRepository.findAll();
        PushSubscriptionEntity subscriptionEntity = subscriptionList.iterator().next();


        Subscription subscription = new Gson().fromJson(subscriptionEntity.getSubscription(), Subscription.class);
        PushNotificationService pushNotificationService = new PushNotificationService(subscription);

        pushNotificationService.sendPushNotification("Hello from the other side!");

        return ResponseEntity.ok("Sent push");
    }
}
