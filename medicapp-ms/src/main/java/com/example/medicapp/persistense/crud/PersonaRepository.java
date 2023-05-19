package com.example.medicapp.persistense.crud;

import com.example.medicapp.persistense.entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PersonaRepository extends JpaRepository<Persona, Integer> {

    Optional<Persona> findByCorreoAndContrasena(String correo, String contrasena);

}
