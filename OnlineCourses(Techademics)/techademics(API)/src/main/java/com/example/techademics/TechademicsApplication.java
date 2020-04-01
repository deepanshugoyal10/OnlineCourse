package com.example.techademics;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TechademicsApplication {

	public static void main(String[] args) {
		System.setProperty("server.port","8081");
		SpringApplication.run(TechademicsApplication.class, args);

	}

}
