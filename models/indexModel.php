<?php

require_once "config/database.php";

class IndexModel{

    private $db;

    public function __construct(){

        $this->db=Database::conectar();

    }

    public function getAll(){

        $sql=$this->db->query("SELECT * FROM cursos_destacados");

        return $sql->fetchAll(PDO::FETCH_ASSOC);

    }

}