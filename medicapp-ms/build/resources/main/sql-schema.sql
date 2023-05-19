CREATE DATABASE IF NOT EXISTS medicapp;
USE medicapp;

CREATE TABLE persona (
  id_persona INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  genero VARCHAR(20) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  contraseña VARCHAR(100) NOT NULL
);

CREATE TABLE cita (
  id_cita INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(900) NOT NULL,
  id_persona_cita INT NOT NULL,
  FOREIGN KEY (id_persona_cita) REFERENCES persona(id_persona)
);
