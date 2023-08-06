package com.example.BackendApplication.services;

import com.example.BackendApplication.entities.PushSubscriptionEntity;
import nl.martijndwars.webpush.Notification;
import nl.martijndwars.webpush.PushService;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.jose4j.lang.JoseException;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.security.Security;
import java.util.concurrent.ExecutionException;


public class PushNotificationService {

    private final String privateKey = "QfCsdEHztU7T6ENipKlzraWjW0no4zbNMBBB4-leJ2Y";
    private final String publicKey = "BPvOrzmWhDt158M6axrQdd8IUY9igrqK2N2aXeRPsgYw6-iRa4C_ZawaGJuqIYp5cOUd4MSc9bK2tZqdbYrTOv4";

    private PushSubscriptionEntity pse;

    public PushNotificationService(PushSubscriptionEntity pse) {
        this.pse = pse;
    }


    public void sendPushNotification(String message) {
        try {
            Security.addProvider(new BouncyCastleProvider());
            PushService pushService = new PushService(publicKey, privateKey);
            Notification notification = new Notification(pse.getEndpoint(), this.publicKey, pse.getAuth(), message);
            System.out.println(pushService.send(notification));
        } catch (GeneralSecurityException | IOException | JoseException | ExecutionException | InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

}
