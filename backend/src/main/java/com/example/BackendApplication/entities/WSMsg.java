package com.example.BackendApplication.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

public class WSMsg {

    @JsonProperty("type")
    private String type;

    @JsonProperty("content")
    private String content;

    public WSMsg(){

    }

    public WSMsg(String tipo, String contenuto){
        this.type = tipo;
        this.content = contenuto;
    }

    public String getContent(){
        return content;
    }

    @Override
    public String toString(){
        return "MessaggioComm{" + type +
                ", contenuto='" + content + '\'' +
                '}';
    }
    
}
