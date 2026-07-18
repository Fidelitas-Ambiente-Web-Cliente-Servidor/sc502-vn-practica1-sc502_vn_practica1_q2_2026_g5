<?php


require_once __DIR__ . '/../models/ContactoModel.php';

class ContactoController
{
    private ContactoModel $model;


    public function __construct()
    {
        $this->model = new ContactoModel();
    }


    public function store(): void
    {

        $data = $this->sanitizeInput($_POST);


        if (
            empty($data['nombre']) || empty($data['correo']) ||empty($data['asunto']) || empty($data['mensaje']))
            {$error = 'Todos los campos son obligatorios.';
            require __DIR__ . '/../views/contacto/create.php';
            return;

            }

        $this->model->create($data);

        header('Location: contacto.php?controller=contacto&action=store');
        exit;
    }


    private function sanitizeInput(array $input): array
    {
        return array_map(function ($value) {
            return htmlspecialchars(trim($value), ENT_QUOTES, 'UTF-8');
        }, $input);
    }
}