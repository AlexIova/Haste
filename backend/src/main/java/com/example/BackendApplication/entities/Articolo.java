package com.example.BackendApplication.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Articolo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String nome;
    private String descrizione;

    public Articolo(String nome, String descrizione) {
        this.nome = nome;
        this.descrizione = descrizione;
    }

    public Articolo(){
        this.nome = null;
        this.descrizione = null;
    }

    public long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getDescrizione() {
        return descrizione;
    }


    @Override
    public String toString() {
        return "Articolo{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", descrizione='" + descrizione + '\'' +
                '}';
    }


}