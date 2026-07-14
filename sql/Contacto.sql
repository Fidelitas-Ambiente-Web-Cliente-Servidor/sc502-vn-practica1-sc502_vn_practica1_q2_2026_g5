CREATE DATABASE IF NOT EXISTS Tarea1_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE Tarea1_db;

CREATE TABLE IF NOT EXISTS contacto (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    asunto VARCHAR(100) NOT NULL,
    mensaje TEXT,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO contacto (nombre, correo, asunto, mensaje) VALUES
('Juan Pérez', 'juan@gmail.com', 'Consulta', 'Necesito información sobre los cursos.'),
('Ana López', 'ana@gmail.com', 'Soporte', 'No puedo iniciar sesión.'),
('Carlos Mora', 'carlos@gmail.com', 'Sugerencia', 'Excelente plataforma.'),
('María Solís', 'maria@gmail.com', 'Información', '¿Cuándo inicia el próximo período?'),
('Luis Vargas', 'luis@gmail.com', 'Otro', 'Muchas gracias por la atención.');