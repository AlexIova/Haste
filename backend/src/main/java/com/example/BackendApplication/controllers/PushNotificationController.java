package com.example.BackendApplication.controllers;


import com.example.BackendApplication.entities.PushSubscription;
import com.example.BackendApplication.repositories.PushSubscriptionsRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PushNotificationController {

    private final PushSubscriptionsRepository pnsRepository;

    public PushNotificationController(PushSubscriptionsRepository pnsRepository){
        this.pnsRepository = pnsRepository;
    }

    @PostMapping("/pushSubscription")
    public ResponseEntity<String> saveSubscription(@RequestBody PushSubscription subscription){
        System.out.println("arrivato qualcosa!");
        // Save the subscription into the database
        pnsRepository.save(subscription);
        System.out.println(subscription);
        return ResponseEntity.ok("Subscription saved");
    }

}
