package com.example.medicapp.persistense.entity;

import javax.persistence.*;

@Entity
@Table(name = "cita")
public class Cita {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cita")
    private Integer idCita;

    @Column(name = "descripcion", length = 900)
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "id_persona_cita")
    private Persona personaCita;

    // getters y setters
}