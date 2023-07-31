package com.example.BackendApplication.logic;

import com.example.BackendApplication.services.MqttService;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Aste implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {
        main(args);
    }

    public static void main(String[] args) {
        try {
            String topicRecv = "/quaderno/penna";
            String topicSend = "/quaderno/lapis";
            MqttService connessioneMq = new MqttService("ws://localhost:15675/ws", "777");
            connessioneMq.connect();
            connessioneMq.subscribe(topicRecv);
            connessioneMq.sendMessage(topicSend, "Ciao da Javino Spring", 1);
        } catch (MqttException e) {
            System.err.println("Qualcosa è andato storto con il client MQTT: " + e);
        }

    }

}
