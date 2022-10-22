<?php

    require 'connexion.php';

    $success = $_POST['source'];

    print $success ? 'Well done! '.$success : 'error';

    