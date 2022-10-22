<?php

//connexion
  try {
      $bdd = new PDO('mysql:host=localhost;dbname=goblins;charset=utf8','root', '');
  } catch(Exception $e) {
      die('Erreur : '.$e->getMessage());
  };