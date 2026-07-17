<?php

require_once 'config/database.php';

$controllerName = $_GET['controller'] ?? 'contacto';
$action         = $_GET['action'] ?? 'index';
$method         = $_SERVER['REQUEST_METHOD'];

$controllerFile = __DIR__ . '/controllers/' . ucfirst($controllerName) . 'Controller.php';

if (!file_exists($controllerFile)) {
    http_response_code(404);
    die('<h2>404 — Controlador no encontrado</h2>');
}

require_once $controllerFile;

$controllerClass = ucfirst($controllerName) . 'Controller';
$controller = new $controllerClass();

switch ($action) {

    case 'store':
        if ($method === 'POST') {
            $controller->store();
        }
        break;

    default:
        http_response_code(404);
        die('<h2>404 — Acción no encontrada</h2>');
}