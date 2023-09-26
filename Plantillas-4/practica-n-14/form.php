<?php
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $espacio =  ' ';
    $archivo =fopen('datos.csv', 'a');

    $linea = array ($nombre. $espacio.  $email);
    fputcsv($archivo, $linea);


    fclose($archivo);

    echo "Datos guardados correctamente.";



?>