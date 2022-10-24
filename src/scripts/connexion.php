<?php

//connexion
  try {
      $bdd = new PDO('mysql:host=qegavrs504.mysql.db;dbname=qegavrs504;charset=utf8','qegavrs504', 'XMoir911X');
  } catch(Exception $e) {
      die('Erreur : '.$e->getMessage());
  };