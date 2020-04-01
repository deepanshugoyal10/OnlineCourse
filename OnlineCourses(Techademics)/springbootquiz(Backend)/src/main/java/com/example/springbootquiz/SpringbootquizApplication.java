package com.example.springbootquiz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootquizApplication {

	public static void main(String[] args) {
		System.setProperty("server.port","8082");
		SpringApplication.run(SpringbootquizApplication.class, args);
	}

}
