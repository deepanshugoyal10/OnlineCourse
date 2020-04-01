package com.example.techademics.model;

import com.example.techademics.model.model2.data2;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class data {

    @Id
    String id;

    String topic;
    String intro;
    List<data2> topics;

    public data(data Data) {
        this.topic = Data.topic;
        this.topics = Data.topics;
        this.intro=Data.intro;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public List<data2> getTopics() {
        return topics;
    }

    public void setTopics(List<data2> topics) {
        this.topics = topics;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public data(){}


}
