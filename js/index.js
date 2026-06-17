const cursos = [

{
    nombre: "Diseño Grafico Profesional",
    descripcion:  "Aprende Photoshop, Illustrator y fundamentos del diseño visual.",
    imagen: "https://universidadeuropea.com/resources/media/images/herramientas_diseno_grafico_og.original.jpg",
    categorias: "Diseño"
},

{
    nombre: "Desarrollo Web",
    descripcion: "Domina HTML, CSS, JavaScript y Bootstrap para crear sitios modernos.",
    imagen: "https://www.appandweb.es/wp-content/uploads/2022/04/post-etapasdesarrollo-Appandweb.jpg",
    categorias: "Programación"
},

{
    nombre: "Animación Digital",
    descripcion:  "Crea animaciones profesionales para contenido multimedia.",
    imagen: "https://universidadeuropea.com/resources/media/images/que-es-animacion-digital-1200x630.2e16d0ba.fill-767x384.jpg",
    categorias: "Multimedia"
}

];

const contenedor = document.getElementById("contenedorCursos");

cursos.forEach(curso => {

  const columna = document.createElement("div");
  columna.classList.add("col-md-4");

  const card = document.createElement("div");
  card.classList.add("card", "h-100", "shadow-sm");

  const imagen = document.createElement("img");
  imagen.src = curso.imagen;
  imagen.alt = curso.nombre;
  imagen.classList.add("card-img-top");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const categoria = document.createElement("span");
  categoria.classList.add("badge", "bg-primary", "mb-2");
  categoria.textContent = curso.categoria;

  const titulo = document.createElement("h5");
  titulo.classList.add("card-title");
  titulo.textContent = curso.nombre;

  const descripcion = document.createElement("p");
  descripcion.classList.add("card-text");
  descripcion.textContent = curso.descripcion;

  const boton = document.createElement("a");
  boton.href = "cursos.html";
  boton.classList.add("btn", "btn-outline-primary");
  boton.textContent = "Ver Más";

  cardBody.appendChild(categoria);
  cardBody.appendChild(titulo);
  cardBody.appendChild(descripcion);
  cardBody.appendChild(boton);

  card.appendChild(imagen);
  card.appendChild(cardBody);

  columna.appendChild(card);

  contenedor.appendChild(columna);
});