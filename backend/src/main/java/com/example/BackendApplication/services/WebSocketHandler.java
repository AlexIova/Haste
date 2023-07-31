package com.example.BackendApplication.services;

import com.example.BackendApplication.entities.WSMsg;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class WebSocketHandler extends TextWebSocketHandler {

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("WebSocket connection established: " + session.getId());
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

        String payload = message.getPayload();
        ObjectMapper objectMapper = new ObjectMapper();
        WSMsg msgComm = objectMapper.readValue(payload, WSMsg.class);

        System.out.println(msgComm);

        WSMsg wsMsg = new WSMsg("chat", "Ciao sono Spring!");
        session.sendMessage(new TextMessage(objectMapper.writeValueAsString(wsMsg)));


    }


    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("WebSocket connection closed: " + session.getId());
    }

}
