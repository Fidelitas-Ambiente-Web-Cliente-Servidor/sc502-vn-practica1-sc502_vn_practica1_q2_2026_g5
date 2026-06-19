

const cursos = [
  {
    nombre: "Diseño Gráfico",
    descripcion: "Aprende a crear diseños impactantes y profesionales con nuestro curso de Diseño Gráfico. Domina las herramientas y técnicas para dar vida a tus ideas creativas.",
    categoria: ["presencial", "diseño"],
    duracion: "6 semanas",
    precio: 200,
    imagen: "https://cr.iseie.com/wp-content/uploads/2022/12/Imagenes-para-paginas-1080-%C3%97-640-px-2.jpg"
  },
  {
    nombre: "Diseño Web",
    descripcion: "Aprenderás a diseñar sitios web modernos y funcionales con las últimas tecnologías del mercado, desde maquetación hasta experiencia de usuario.",
    categoria: ["presencial", "diseño"],
    duracion: "12 semanas",
    precio: 300,
    imagen: "https://datos.gob.es/sites/default/files/styles/wide/public/blog/image/04_0.jpg?itok=8FmuVgOz"
  },
  {
    nombre: "Programación con Python",
    descripcion: "Dominarás los fundamentos de la lógica de programación utilizando Python. Aprenderás a pensar como un desarrollador, resolver problemas complejos y escribir código limpio desde el primer día.",
    categoria: ["presencial", "programacion"],
    duracion: "15 semanas",
    precio: 150,
    imagen: "https://eiposgrados.com/wp-content/uploads/2021/01/masterhacks_fin_vida_python_2.7-768x457.jpg"
  },
  {
    nombre: "Redes CCNA",
    descripcion: "Aprende los fundamentos de las redes de computadoras y obtén la certificación CCNA de Cisco para aplicar en el entorno laboral con confianza.",
    categoria: ["virtual", "redes"],
    duracion: "16 semanas",
    precio: 500,
    imagen: "https://formaciontic.una.ac.cr/templates/yootheme/cache/c5/CISCO_CCNA_I_Introduccin_a_las_Redes-c5773e39.jpeg"
  },
  {
    nombre: "Ciberseguridad",
    descripcion: "Aprende a proteger sistemas y datos contra amenazas cibernéticas con nuestro curso de Ciberseguridad, diseñado para principiantes y profesionales.",
    categoria: ["virtual", "redes"],
    duracion: "20 semanas",
    precio: 400,
    imagen: "https://starkcloud.com/wp-content/uploads/2025/01/Que-es-Ciberseguridad.webp"
  },
  {
    nombre: "Animación Digital",
    descripcion: "Aprende las técnicas de animación digital y crea contenido visual impactante para videojuegos, películas y publicidad.",
    categoria: ["virtual", "diseño"],
    duracion: "24 semanas",
    precio: 800,
    imagen: "https://ulacit.ac.cr/wp-content/uploads/2025/10/imagen_Tecnico_en_Animacion_Digital.webp"
  }
  
];


let categoriaActiva = "todos";
let textoBusqueda   = "";



function prepararDOM() {
  const main = document.querySelector("main");

  
  main.querySelectorAll("h2.titulo-cursos, span.linea-acento, #contenedor")
      .forEach(el => el.remove());


  const divFiltros = document.createElement("div");
  divFiltros.id = "contenedor-filtros";
  divFiltros.style.cssText = `
    display: flex;
    align-items: center;
    gap: 10px;
    width: 1000px;
    margin: 0 auto 24px;
    flex-wrap: wrap;
  `;


  const categorias = [
    { label: "Todos",             valor: "todos"       },
    { label: "Presencial",        valor: "presencial"  },
    { label: "Virtual",           valor: "virtual"     },
    { label: "Diseño",            valor: "diseño"      },
    { label: "Programación",      valor: "programacion"},
    { label: "Redes y Seguridad", valor: "redes"       }
  ];

  
  const label = document.createElement("span");
  label.textContent = "Filtrar:";
  label.style.cssText = `
    color: rgba(0,0,0,0.6);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    white-space: nowrap;
  `;
  divFiltros.appendChild(label);

  
  categorias.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent  = cat.label;
    btn.dataset.cat  = cat.valor;
    btn.className    = "btn-filtro-cat";

    
    btn.style.cssText = `
      padding: 8px 18px;
      border: 2px solid rgba(0,191,255,0.35);
      background: transparent;
      color: rgba(0,0,0,0.7);
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.25s ease;
    `;

    
    if (cat.valor === "todos") EstiloActivo(btn);

    btn.addEventListener("mouseenter", () => {
      if (btn.dataset.cat !== categoriaActiva) {
        btn.style.borderColor = "#00BFFF";
        btn.style.color       = "#00BFFF";
        btn.style.background  = "rgba(0,191,255,0.08)";
      }
    });
    btn.addEventListener("mouseleave", () => {
      if (btn.dataset.cat !== categoriaActiva) EstiloInactivo(btn);
    });

    btn.addEventListener("click", () => {
      
      divFiltros.querySelectorAll(".btn-filtro-cat")
                .forEach(b => EstiloInactivo(b));

      
      EstiloActivo(btn);

      
      categoriaActiva = btn.dataset.cat;
      renderizarCursos();
    });

    divFiltros.appendChild(btn);
  });

  
  const gridCursos = document.createElement("div");
  gridCursos.id = "gridCursos";
  gridCursos.style.cssText = `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    background-color: var(--color-fondo);
    padding: 20px 0 40px;
  `;

  
  const sinResultados = document.createElement("div");
  sinResultados.id = "sinResultados";
  sinResultados.style.cssText = `
    display: none;
    text-align: center;
    padding: 3rem 1rem;
    color: rgba(255,255,255,0.45);
    background-color: var(--color-fondo);
    width: 100%;
  `;
  sinResultados.innerHTML = `
    <p style="font-size:1rem; margin:0">No se encontraron cursos</p>
    <span style="font-size:0.8rem; opacity:0.6">Intenta con otro término o categoría</span>
  `;

  
  const busqueda = main.querySelector(".contenedor-busqueda");
  busqueda.insertAdjacentElement("afterend", divFiltros);
  divFiltros.insertAdjacentElement("afterend", gridCursos);
  gridCursos.appendChild(sinResultados);
}


function EstiloActivo(btn) {
  btn.style.background   = "#00BFFF";
  btn.style.borderColor  = "#00BFFF";
  btn.style.color        = "#071A2D";
  btn.dataset.cat && (categoriaActiva = btn.dataset.cat);
}

function EstiloInactivo(btn) {
  btn.style.background  = "transparent";
  btn.style.borderColor = "rgba(0,191,255,0.35)";
  btn.style.color       = "rgba(0,0,0,0.7)";
}



function renderizarCursos() {
  const grid          = document.getElementById("gridCursos");
  const sinResultados = document.getElementById("sinResultados");

 
  const cursosFiltrados = cursos.filter(curso => {


    const pasaCategoria =
      categoriaActiva === "todos" ||
      curso.categoria.includes(categoriaActiva);

  
    const pasaBusqueda =
      textoBusqueda === "" ||
      curso.nombre.toLowerCase().includes(textoBusqueda) ||
      curso.descripcion.toLowerCase().includes(textoBusqueda);

  
    return pasaCategoria && pasaBusqueda;
  });

 
  const tarjetasHTML = cursosFiltrados.map(curso => `
    <div class="cards-cursos">
      <div class="image-curso">
        <img
          src="${curso.imagen}"
          alt="${curso.nombre}"
          class="size-picture"
          onerror="this.src='https://placehold.co/400x250/0B243E/00BFFF?text=Sin+imagen'"
        >
        <span class="curso">${curso.nombre}</span>
      </div>
      <div class="texto-curso">
        <p class="descripcion-curso">${curso.descripcion}</p>
        <h3 class="duracion-curso">Duración: ${curso.duracion}</h3>
        <h2 class="precio-curso">Precio: $${curso.precio}</h2>
      </div>
    </div>
  `);

  
  grid.innerHTML = tarjetasHTML.join("");
  grid.appendChild(sinResultados);

  
  sinResultados.style.display = cursosFiltrados.length === 0 ? "block" : "none";
}



function EventoBusqueda() {
  const inputBusqueda = document.querySelector(".barra-busqueda");
  const btnBuscar     = document.querySelector(".btn-buscar");

  inputBusqueda.addEventListener("input", () => {
    textoBusqueda = inputBusqueda.value.trim().toLowerCase();
    renderizarCursos();
  });


  btnBuscar.addEventListener("click", () => {
    textoBusqueda = inputBusqueda.value.trim().toLowerCase();
    renderizarCursos();
  });
}



document.addEventListener("DOMContentLoaded", () => {
  prepararDOM();
  EventoBusqueda();
  renderizarCursos();
});