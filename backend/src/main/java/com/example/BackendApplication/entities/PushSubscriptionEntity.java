package com.example.BackendApplication.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PushSubscription {
    @Id
    private long id;
    private String endpoint;
    // private byte[] keys;

    public long getId() {
        return id;
    }

    public String getEndpoint() {
        return endpoint;
    }

    /*
    public String getKeys() {
        return keys.toString();
    }
    */

    @Override
    public String toString() {
        return "PushSubscription{" +
                "id=" + id +
                ", endpoint='" + endpoint + '\'' +
//                ", keys='" + keys + '\'' +
                '}';
    }
}
