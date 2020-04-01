package com.example.springbootquiz.service;

import com.example.springbootquiz.model.Person;
import com.example.springbootquiz.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;
    //createOperation
    public Person create(String firstName, String lastName, String email, String password)
    {
        return personRepository.save(new Person(firstName,lastName,email,password));
    }
    public String create(Person person)     //POST
    {
        personRepository.save(person);
        return ("Hi, "+person.getFirstName()+" "+person.getLastName()+" you have been registered");
    }
    //retrieveOperation
    public List<Person> getAll()
    {
        return personRepository.findAll();
    }

    public Person findByFirstName(String firstName)
    {
        return personRepository.findByFirstName(firstName);
    }

    //UpdateOperation
    public Person update(String firstName, String lastName, String email, String password)
    {
        Person p=personRepository.findByFirstName(firstName);
        p.setLastName(lastName);
        p.setEmail(email);
        p.setPassword(password);
        return personRepository.save(p);
    }
    //DeleteOperation
    public void deleteAll(){
        personRepository.deleteAll();
    }
    public void delete(String firstName)
    {
        Person p=personRepository.findByFirstName(firstName);
        personRepository.delete(p);
    }

}
