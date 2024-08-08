package com.formulario.json.controller;
import org.springframework.web.bind.annotation.*;

import com.formulario.json.model.User;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserRestController {

    private List<User> lista = new ArrayList<>();

    @PostMapping("/crearusuario")
    public User crearUsuario(@RequestBody User user) {
        lista.add(user);
        // Imprimir datos para verificar
        for (User usuarios : lista) {
            System.out.println("Nombre: " + usuarios.getNombre());
            System.out.println("Cédula: " + usuarios.getCedula());
        }
        return user; // Retornar el usuario recibido
    }
}
