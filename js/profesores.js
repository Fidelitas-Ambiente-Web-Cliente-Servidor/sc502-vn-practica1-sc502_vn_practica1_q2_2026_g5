// Array con la información de cada profesor
var profesores = [
  {
    nombre: "Dra. Carmen Ríos",
    especialidad: "Diseño Gráfico",
    titulo: "Doctora en Comunicación Visual · UNAM",
    descripcion: "Doce años en agencias de branding de Ciudad de México y Buenos Aires. Combina teoría del color, tipografía y psicología visual en cada clase. Enseña desde la mirada de quien ha trabajado con marcas reales, guiando a sus estudiantes hacia el pensamiento creativo con criterio profesional.",
    foto: "https://i.pravatar.cc/400?img=47",
    correo: "carmen.rios@cyberdog.com",
    cursosQueImparte: [
      "Fundamentos de Diseño Gráfico",
      "Tipografía Avanzada",
      "Branding Corporativo",
      "Composición Visual"
    ]
  },
  {
    nombre: "Prof. Sebastián Mora",
    especialidad: "Fotografía",
    titulo: "Magíster en Fotografía Documental · UBA",
    descripcion: "Fotógrafo editorial con trabajo publicado en revistas latinoamericanas de renombre. Sus clases de iluminación y postprocesado son de las más solicitadas del programa. Fusiona técnica y narrativa visual para que sus alumnos encuentren su propio lenguaje fotográfico.",
    foto: "https://i.pravatar.cc/400?img=12",
    correo: "sebastian.mora@cyberdog.com",
    cursosQueImparte: [
      "Fotografía Básica",
      "Iluminación en Estudio",
      "Postproducción con Lightroom",
      "Fotografía Documental"
    ]
  },
  {
    nombre: "Lic. Valentina Cruz",
    especialidad: "Animación Digital",
    titulo: "Licenciada en Artes Digitales · UAM",
    descripcion: "Animadora con créditos en producciones para plataformas de streaming internacionales. Enseña a construir narrativas con movimiento, poniendo el concepto antes que la técnica. Su enfoque pedagógico parte del guion y el storyboard hacia la animación final.",
    foto: "https://i.pravatar.cc/400?img=25",
    correo: "valentina.cruz@cyberdog.com",
    cursosQueImparte: [
      "Introducción a la Animación",
      "Motion Graphics",
      "Animación 2D con After Effects",
      "Storytelling Visual"
    ]
  },
  {
    nombre: "Mg. Andrés Fuentes",
    especialidad: "Desarrollo Web",
    titulo: "Magíster en HCI · PUC",
    descripcion: "Desarrollador frontend con más de ocho años de experiencia y consultor UX para startups y agencias en Chile y Colombia. Para Andrés el código limpio y el diseño bien pensado no son disciplinas distintas: son la misma. Sus clases integran diseño de interfaz con implementación técnica real.",
    foto: "https://i.pravatar.cc/400?img=33",
    correo: "andres.fuentes@cyberdog.com",
    cursosQueImparte: [
      "HTML & CSS Profesional",
      "JavaScript Avanzado",
      "Diseño UX/UI",
      "Accesibilidad Web"
    ]
  }
];

// Crea las tarjetas en el HTML 
function renderizarTarjetas() {
  var contenedor = document.getElementById('contenedor-profesores');

  // Recorre el array y crea una tarjeta por cada profesor
  profesores.forEach(function(profesor, index) {
    var col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-3';

     col.innerHTML =
      '<article class="tarjeta-profesor" data-index="' + index + '" role="button" tabindex="0" aria-label="Ver detalle de ' + profesor.nombre + '">' +
        '<div class="foto-wrapper">' +
          '<img src="' + profesor.foto + '" alt="Foto de ' + profesor.nombre + '" loading="lazy" />' +
          '<span class="especialidad-badge">' + profesor.especialidad + '</span>' +
        '</div>' +
        '<div class="cuerpo">' +
          '<h3 class="nombre">' + profesor.nombre + '</h3>' +
          '<span class="titulo-academico">' + profesor.titulo + '</span>' +
          '<p class="descripcion-corta">' + profesor.descripcion + '</p>' +
        '</div>' +
      '</article>';

    contenedor.appendChild(col);
  });
}

// Llena el modal 
function abrirModal(index) {
  var p = profesores[index];

  document.getElementById('modal-foto').src = p.foto;
  document.getElementById('modal-foto').alt = 'Foto de ' + p.nombre;
  document.getElementById('modal-badge').textContent = p.especialidad;
  document.getElementById('modal-nombre').textContent = p.nombre;
  document.getElementById('modal-titulo').textContent = p.titulo;
  document.getElementById('modal-descripcion').textContent = p.descripcion;

  var correoEl = document.getElementById('modal-correo');
  correoEl.textContent = p.correo;
  correoEl.href = 'mailto:' + p.correo;

  // Genera la lista de cursos 
  var listaCursos = document.getElementById('modal-cursos');
  listaCursos.innerHTML = '';
  p.cursosQueImparte.forEach(function(curso) {
    var li = document.createElement('li');
    li.textContent = curso;
    listaCursos.appendChild(li);
  });

  // Abre el modal 
  var modalEl = document.getElementById('modalProfesor');
  var modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

// Agrega eventos de clic a las tarjetas 
function registrarEventos() {
  var contenedor = document.getElementById('contenedor-profesores');

  contenedor.addEventListener('click', function(e) {
    var tarjeta = e.target.closest('.tarjeta-profesor');
    if (tarjeta) {
      var index = parseInt(tarjeta.dataset.index, 10);
      abrirModal(index);
    }
  });


  contenedor.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      var tarjeta = e.target.closest('.tarjeta-profesor');
      if (tarjeta) {
        e.preventDefault();
        var index = parseInt(tarjeta.dataset.index, 10);
        abrirModal(index);
      }
    }
  });
}


document.addEventListener('DOMContentLoaded', function() {
  renderizarTarjetas();
  registrarEventos();
});
