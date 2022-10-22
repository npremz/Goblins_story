<?php
    $img = $_POST['body']; // $_POST didn't work
    $img = str_replace('data:image/png;base64,', '', $img);
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);

    $structure = $_POST['structure'];
    
    if (!file_exists($_SERVER['DOCUMENT_ROOT'] .$structure)) {
        mkdir($_SERVER['DOCUMENT_ROOT'] .$structure, 0777, true);
    }
    
    $file = $_SERVER['DOCUMENT_ROOT'].$structure.time().'.png';
    
    $success = file_put_contents($file, $data);
    print $success ? $file.' saved.' : 'Unable to save the file.';
?>
