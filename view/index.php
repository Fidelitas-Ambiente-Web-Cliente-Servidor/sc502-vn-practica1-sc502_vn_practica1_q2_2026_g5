<?php include "layout/header.php"; ?>

<nav class="navbar menu-top navbar-expand-lg">
    <div class="container">

        <a class="navbar-brand logo" href="index.php?controller=index&action=index">
            <span class="logo-cuadro">C</span>
            Academia Cyberdog
        </a>

        <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Abrir menú">

            <span class="navbar-toggler-icon"></span>

        </button>

        <div class="collapse navbar-collapse" id="navMenu">

            <ul class="navbar-nav ms-auto links-nav">

                <li class="nav-item">
                    <a class="nav-link activo"
                       href="index.php?controller=index&action=index">
                        Inicio
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="cursos.html">
                        Cursos
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="profesores.html">
                        Profesores
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="contacto.html">
                        Contacto
                    </a>
                </li>

            </ul>

        </div>

    </div>
</nav>

<main>

    <!-- HERO -->
    <section class="page-header">

        <div class="container">

            <span class="etiqueta-seccion">
                Bienvenidos
            </span>

            <h1>Academia Cyberdog</h1>

            <p class="descripcion">
                Aprende Diseño Gráfico, Desarrollo Web y Artes Digitales con profesores especializados y programas diseñados
                para el mundo profesional.
            </p>

            <a href="cursos.html" class="btn btn-academia">
                Explorar Cursos
            </a>

        </div>

    </section>

    <!-- CURSOS DESTACADOS -->
    <section class="py-5">

        <div class="container">

            <h2 class="text-center mb-5">
                Cursos Destacados
            </h2>

            <div class="row g-4">

                <?php foreach($cursos as $curso): ?>

                    <div class="col-md-4">

                        <div class="card h-100 shadow">

                            <img
                                src="<?= htmlspecialchars($curso['imagen']); ?>"
                                class="card-img-top"
                                alt="<?= htmlspecialchars($curso['nombre']); ?>">

                            <div class="card-body">

                                <h5 class="card-title">
                                    <?= htmlspecialchars($curso['nombre']); ?>
                                </h5>

                                <p class="card-text">
                                    <?= htmlspecialchars($curso['descripcion']); ?>
                                </p>

                                <span class="badge bg-primary">
                                    <?= htmlspecialchars($curso['duracion']); ?>
                                </span>

                            </div>

                        </div>

                    </div>

                <?php endforeach; ?>

            </div>

        </div>

    </section>

    <!-- ESTADÍSTICAS -->
    <section class="py-5 bg-light">

        <div class="container">

            <h2 class="text-center mb-5">
                Nuestra Academia en Números
            </h2>

            <div class="row text-center">

                <div class="col-md-3 mb-4">
                    <h3 class="display-5 fw-bold">1500+</h3>
                    <p>Estudiantes</p>
                </div>

                <div class="col-md-3 mb-4">
                    <h3 class="display-5 fw-bold">25</h3>
                    <p>Profesores</p>
                </div>

                <div class="col-md-3 mb-4">
                    <h3 class="display-5 fw-bold">18</h3>
                    <p>Cursos Disponibles</p>
                </div>

                <div class="col-md-3 mb-4">
                    <h3 class="display-5 fw-bold">95%</h3>
                    <p>Satisfacción</p>
                </div>

            </div>

        </div>

    </section>

    <!-- TESTIMONIOS -->
    <section class="py-5">

        <div class="container">

            <h2 class="text-center mb-5">
                Lo que dicen nuestros estudiantes
            </h2>

            <div class="row g-4">

                <div class="col-md-6">

                    <div class="card shadow-sm h-100">

                        <div class="card-body">

                            <p class="card-text">
                                "Gracias a Academia Cyberdog conseguí mi primer trabajo como diseñador freelance.
                                Los profesores explican de forma clara y práctica."
                            </p>

                            <h6 class="mt-3 mb-0">
                                María Rodríguez
                            </h6>

                            <small class="text-muted">
                                Diseñadora Gráfica
                            </small>

                        </div>

                    </div>

                </div>

                <div class="col-md-6">

                    <div class="card shadow-sm h-100">

                        <div class="card-body">

                            <p class="card-text">
                                "El curso de Desarrollo Web me ayudó a crear proyectos reales y mejorar mi portafolio profesional."
                            </p>

                            <h6 class="mt-3 mb-0">
                                Carlos Jiménez
                            </h6>

                            <small class="text-muted">
                                Desarrollador Web Junior
                            </small>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>

</main>

<?php include "layout/footer.php"; ?>