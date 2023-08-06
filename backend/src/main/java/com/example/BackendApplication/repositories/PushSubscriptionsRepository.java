package com.example.BackendApplication.repositories;

import com.example.BackendApplication.entities.PushSubscriptionEntity;
import org.springframework.data.repository.CrudRepository;

public interface PushSubscriptionsRepository extends CrudRepository<PushSubscriptionEntity, Long> {

}
