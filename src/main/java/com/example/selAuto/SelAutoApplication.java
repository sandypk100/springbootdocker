package com.example.selAuto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;

@SpringBootApplication(exclude = MongoAutoConfiguration.class)
public class SelAutoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SelAutoApplication.class, args);
	}

}
