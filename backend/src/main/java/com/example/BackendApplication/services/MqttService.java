package com.example.BackendApplication.services;

import org.eclipse.paho.client.mqttv3.*;
import org.eclipse.paho.client.mqttv3.persist.MqttDefaultFilePersistence;

public class MqttService {

    MqttDefaultFilePersistence persistence = new MqttDefaultFilePersistence();
    MqttConnectOptions connOpts = new MqttConnectOptions();
    MqttClient client;

    // TODO: parametrize this
    IMqttMessageListener handlerMessaggioRicevuto = (topic, msg) -> {
        byte[] payload = msg.getPayload();
        System.out.println(new String(payload));
    };

    public MqttService(String brokerUrl, String clientId) throws MqttException {
        this.client = new MqttClient(brokerUrl, clientId, persistence);
        connOpts.setCleanSession(false);
        System.out.println("Initialization Mqtt Client complete");
    }

    public void connect() throws MqttException {
        this.client.connect(connOpts);
        System.out.println("Mqtt client connected");
    }

    public void subscribe(String topicRecv) throws MqttException {
        client.subscribe(topicRecv, handlerMessaggioRicevuto);
    }


    public void sendMessage(String topicSend, String content, int qos) throws MqttException {
        MqttMessage message = new MqttMessage(content.getBytes());
        message.setQos(qos);
        client.publish(topicSend, message);
    }


}
