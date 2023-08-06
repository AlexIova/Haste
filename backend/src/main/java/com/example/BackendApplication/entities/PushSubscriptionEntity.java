package com.example.BackendApplication.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class PushSubscriptionEntity {
    @Id
    private long id;
    @Column(length = 100000)
    private String subscription;

    public String getSubscription() {
        return subscription;
    }

    @Override
    public String toString() {
        return "PushSubscriptionEntity{" +
                "id=" + id +
                ", subscription='" + subscription + '\'' +
                '}';
    }

}
