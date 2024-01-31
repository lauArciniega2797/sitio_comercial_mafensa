<?php
define('DB_HOST', 'mysql:host=www.mafensa.com;dbname=mafensa_tienda2;charset=utf8');
define('DB_USER', 'mafensa_tienda');
define('DB_PASS', 'a2adk3y3aZLW');

try {
    $conn = new PDO(DB_HOST, DB_USER, DB_PASS);
    $conn->exec("set names utf8");
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>