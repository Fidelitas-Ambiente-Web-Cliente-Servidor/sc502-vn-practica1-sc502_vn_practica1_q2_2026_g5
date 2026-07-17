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

CREATE TABLE cursos_destacados(

id INT AUTO_INCREMENT PRIMARY KEY,

nombre VARCHAR(100),

descripcion TEXT,

imagen VARCHAR(255),

duracion VARCHAR(50)

);

INSERT INTO cursos_destacados(nombre,descripcion,imagen,duracion)
VALUES
('Diseño Gráfico',
'Aprende Illustrator y Photoshop.',
'img/diseno.jpg',
'3 meses'),

('Desarrollo Web',
'HTML CSS JavaScript PHP.',
'img/web.jpg',
'4 meses'),

('UX/UI',
'Diseño de interfaces.',
'img/ui.jpg',
'2 meses'),

('Modelado 3D',
'Blender desde cero.',
'img/blender.jpg',
'5 meses'),

('Marketing Digital',
'SEO y Redes Sociales.',
'img/marketing.jpg',
'3 meses');