package com.example.BackendApplication.repositories;

import com.example.BackendApplication.entities.PushSubscription;
import org.springframework.data.repository.CrudRepository;

public interface PushSubscriptionsRepository extends CrudRepository<PushSubscription, Long> {

}
