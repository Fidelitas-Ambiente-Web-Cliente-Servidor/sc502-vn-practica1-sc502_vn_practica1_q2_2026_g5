<?php

require_once "models/indexModel.php";

class IndexController{

    public function index(){

        $modelo=new IndexModel();

        $cursos=$modelo->getAll();

        require_once "view/index.php";

    }

}