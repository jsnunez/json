package com.formulario.json.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.formulario.json.model.User;

@RestController
@RequestMapping("/api")
public class UseRestController {

@PostMapping("/crearusuario")
public User crearusuario(@RequestBody User user){
return user;
}

}
