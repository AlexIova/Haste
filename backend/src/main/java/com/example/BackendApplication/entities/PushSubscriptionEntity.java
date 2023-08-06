package com.example.BackendApplication.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class PushSubscriptionEntity {
    @Id
    private long id;
    private String endpoint;
    private String auth;

    public long getId() {
        return id;
    }

    public String getEndpoint() {
        return endpoint;
    }

    public String getAuth() {
        return auth.toString();
    }

    @Override
    public String toString() {
        return "PushSubscription{" +
                "id=" + id +
                ", endpoint='" + endpoint + '\'' +
                ", keys='" + auth + '\'' +
                '}';
    }
}
