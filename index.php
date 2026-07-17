<?php

$controller = $_GET["controller"] ?? "index";
$action = $_GET["action"] ?? "index";

$controllerName = ucfirst($controller) . "Controller";
$controllerFile = "controllers/" . $controllerName . ".php";

if (!file_exists($controllerFile)) {
    die("El controlador no existe.");
}

require_once $controllerFile;

$controlador = new $controllerName();

if (!method_exists($controlador, $action)) {
    die("La acción no existe.");
}

$controlador->$action();