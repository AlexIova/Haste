package com.example.BackendApplication;

import com.example.BackendApplication.entities.Articolo;
import com.example.BackendApplication.repositories.ArticoloRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}


	@Bean
	CommandLineRunner init(ArticoloRepository articoloRepository){
		return args -> {

			articoloRepository.save(new Articolo("Ciabatte", "Confortevoli per stare in casa"));
			articoloRepository.save(new Articolo("Calzini", "Come delle calze ma piccole"));
			articoloRepository.save(new Articolo("Lampada", "Per illuminare le tue giornate"));
			articoloRepository.save(new Articolo("Penna", "Articoli vintage inutilizzati"));

			articoloRepository.findAll().forEach(System.out::println);

		};
	}

}
