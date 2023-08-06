package com.example.BackendApplication.services;

import com.example.BackendApplication.entities.PushSubscriptionEntity;
import nl.martijndwars.webpush.Notification;
import nl.martijndwars.webpush.PushService;
import nl.martijndwars.webpush.Subscription;
import org.apache.http.HttpResponse;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.jose4j.lang.JoseException;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.security.Security;
import java.util.concurrent.ExecutionException;


public class PushNotificationService {

    private final String privateKey = "QfCsdEHztU7T6ENipKlzraWjW0no4zbNMBBB4-leJ2Y";
    private final String publicKey = "BPvOrzmWhDt158M6axrQdd8IUY9igrqK2N2aXeRPsgYw6-iRa4C_ZawaGJuqIYp5cOUd4MSc9bK2tZqdbYrTOv4";

    private Subscription subscription;

    public PushNotificationService(Subscription subscription) {
        this.subscription = subscription;
    }


    public void sendPushNotification(String message) {
        try {
            Security.addProvider(new BouncyCastleProvider());

            PushService pushService = new PushService();
            pushService.setPublicKey(publicKey);
            pushService.setPrivateKey(privateKey);
            pushService.setSubject("mailto:admin@domain.com");

            String payload = "{" +
                    "        \"notification\": {" +
                    "            \"title\": \"Hello from the other side!\"," +
                    "            \"body\": \"Ti prego dimmi che lo sto leggendo\"," +
                    "            \"data\": {" +
                    "                \"dateOfArrival\": \"2020-01-01T00:00:00\"," +
                    "                \"primaryKey\": 1" +
                    "            }," +
                    "            \"actions\": [{" +
                    "                \"action\": \"explore\"," +
                    "                \"title\": \"Go to the site\"" +
                    "            }]" +
                    "        }" +
                    "}";

            Notification notification = new Notification(subscription,payload);
            HttpResponse httpResponse = pushService.send(notification);
            System.out.println(httpResponse);
        } catch (GeneralSecurityException | IOException | JoseException | ExecutionException | InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

}
