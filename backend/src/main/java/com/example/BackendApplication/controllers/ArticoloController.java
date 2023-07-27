package com.example.BackendApplication.controllers;

import com.example.BackendApplication.entities.Articolo;
import com.example.BackendApplication.repositories.ArticoloRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ArticoloController {

    private final ArticoloRepository articoloRepository;

    public ArticoloController(ArticoloRepository articoloRepository) { this.articoloRepository = articoloRepository; }

    @GetMapping("/articoli")
    public List<Articolo> getArticoli() {
        return (List<Articolo>) articoloRepository.findAll();
    }

    @PostMapping("/articoli")
    public void addArticolo(@RequestBody Articolo articolo) {
        articoloRepository.save(articolo);
    }


}
