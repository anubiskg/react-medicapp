
-- Insertar datos en la tabla persona
INSERT INTO persona (id_persona, nombre, apellido, genero, correo, contrasenia)
VALUES
(1, 'Juan', 'Pérez', 'Masculino', 'juan.perez@mail.com', '123456'),
(2, 'María', 'González', 'Femenino', 'maria.gonzalez@mail.com', 'abcdef');

-- Insertar datos en la tabla cita
INSERT INTO cita (id_cita, descripcion, id_persona_cita)
VALUES
(1, 'Cita para revisión médica', 1),
(2, 'Cita para consulta psicológica', 1),
(3, 'Cita para consulta odontológica', 2);
