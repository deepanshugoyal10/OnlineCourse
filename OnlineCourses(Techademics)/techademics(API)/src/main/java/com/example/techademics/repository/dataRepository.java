package com.example.techademics.repository;

import com.example.techademics.model.data;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface dataRepository extends MongoRepository<data,String> {

    public data findByTopic(String topic);
}
