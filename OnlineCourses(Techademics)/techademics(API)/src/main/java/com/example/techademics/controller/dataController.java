package com.example.techademics.controller;

import com.example.techademics.model.data;
import com.example.techademics.service.dataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class dataController {

    @Autowired
    dataService DataService;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/getAll")
    public List<data> getAllTopics(){
        return DataService.getAll();
    }

    @RequestMapping("/deleteAll")
    public void deleteAll(){
        DataService.deleteAll();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/create")
    public void add(@RequestBody data Data){
        DataService.create(Data);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/{topic}")
    public data getByTopic(@PathVariable String topic){
        return DataService.getTopic(topic);
    }

}
