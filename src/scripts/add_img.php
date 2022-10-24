<?php

    require 'connexion.php';

    $success = $_POST['source'];

    $auteur = $_POST['username'];
    $source = $_POST['source'].$_POST['name'].'.png';

    $requete = $bdd->exec("INSERT INTO info_img(auteur, src) VALUES('$auteur', '$source')") or die(print_r($bdd->errorInfo()));

    print $success ? 'Well done! '.$success : 'error';

    