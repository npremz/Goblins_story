<?php
    $img = file_get_contents("php://input"); // $_POST didn't work
    $img = str_replace('data:image/png;base64,', '', $img);
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);
    
    if (!file_exists($_SERVER['DOCUMENT_ROOT'] . "/img")) {
        mkdir($_SERVER['DOCUMENT_ROOT'] . "/img", 0777, true);
    }
    
    $file = $_SERVER['DOCUMENT_ROOT'] . "/img/".time().'.png';
    
    $success = file_put_contents($file, $data);
    print $success ? $file.' saved.' : 'Unable to save the file.';
?>
