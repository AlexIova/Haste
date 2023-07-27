package com.example.BackendApplication.repositories;


import com.example.BackendApplication.entities.Articolo;
import org.springframework.data.repository.CrudRepository;

public interface ArticoloRepository extends CrudRepository<Articolo, Long> {

}
