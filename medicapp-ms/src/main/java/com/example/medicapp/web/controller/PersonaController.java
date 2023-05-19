package com.example.medicapp.web.controller;

import com.example.medicapp.persistense.crud.PersonaRepository;
import com.example.medicapp.persistense.entity.Persona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/persona")
@CrossOrigin(origins = { "*" })
public class PersonaController {

    @Autowired
    private PersonaRepository personaRepository;

    @PostMapping("/registro")
    public ResponseEntity<Persona> registroPersona(@RequestBody Persona persona) {
        Persona nuevaPersona = personaRepository.save(persona);
        return ResponseEntity.ok(nuevaPersona);
    }

    @GetMapping("/buscarRegistro")
    public Optional<Persona> findByCorreoAndContrasena(@RequestParam String correo, @RequestParam String contrasena) {
        return personaRepository.findByCorreoAndContrasena(correo, contrasena);
    }
}