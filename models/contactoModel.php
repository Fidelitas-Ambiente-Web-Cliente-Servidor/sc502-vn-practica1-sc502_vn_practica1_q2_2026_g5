<?php


require_once __DIR__ . '/../config/database.php';

class ContactoModel
{
    private PDO $db;

    public function __construct()
    {
        $this->db = Tarea1_db::getConnection();
    }


   
    public function create(array $data): bool
    {
        $stmt = $this->db->prepare(
            'INSERT INTO contacto (nombre, correo, asunto, mensaje)
             VALUES (:nombre, :correo, :asunto, :mensaje)'
        );

        return $stmt->execute([
            ':nombre'  => $data['nombre'],
            ':correo'  => $data['correo'],
            ':asunto'  => $data['asunto'],
            ':mensaje' => $data['mensaje'],
        ]);
    }
}