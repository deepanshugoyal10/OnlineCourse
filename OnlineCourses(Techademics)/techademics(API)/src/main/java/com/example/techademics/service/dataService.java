package com.example.techademics.service;

import com.example.techademics.model.data;
import com.example.techademics.repository.dataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class dataService {

    @Autowired
    private dataRepository DataRepository;

    public void create(data Data)
    {
        DataRepository.save(new data(Data));
    }

    public List<data> getAll(){
        return DataRepository.findAll();
    }

    public data getTopic(String topic){
        return DataRepository.findByTopic(topic);
    }

    public void deleteAll(){
        DataRepository.deleteAll();
    }

    public void deleteTopic(data topic){
        DataRepository.delete(topic);
    }


}
