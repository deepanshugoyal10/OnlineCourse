package com.example.springbootquiz.controller;

import com.example.springbootquiz.model.Person;
import com.example.springbootquiz.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PersonController {
    @Autowired
    private PersonService personService;

    @RequestMapping("/create")
    public String create(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String email, @RequestParam String password)
    {
        Person p=personService.create(firstName,lastName,email,password);
        return p.toString();
    }
    @RequestMapping(method= RequestMethod.POST, value="/create")
    public String create(@RequestBody Person person)
    {
        personService.create(person);
        return ("Hi, "+person.getFirstName()+" "+person.getLastName()+" you have been registered!");
    }
    @RequestMapping("/get")
    public Person getPerson(@RequestParam String firstName)
    {
        return personService.findByFirstName(firstName);
    }
    @RequestMapping("/getAll")
    public List<Person> getAllPerson()
    {
        return personService.getAll();
    }
    @RequestMapping("/update")
    public String update(@RequestParam String firstName, @RequestParam String lastName,@RequestParam String email, @RequestParam String password)
    {
        Person p=personService.update(firstName, lastName,email, password);
        return p.toString();
    }
    @RequestMapping("/delete")
    public String delete(@RequestParam String firstName)
    {
        personService.delete(firstName);
        return "Deleted "+ firstName;
    }
    @RequestMapping("/deleteAll")
    public String deleteAll()
    {
        personService.deleteAll();
        return "Deleted All Records!";
    }

}
