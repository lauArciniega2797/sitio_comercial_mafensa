<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header("Content-type: application/json");
include("../../config.php");

$result = array( 'error' => false );
if (isset($_GET['action'])) {
    $action = $_GET['action'];
    $datos = array();
    
    if ($action == 'getProducts') {
        $consulta = $conn->query("SELECT articulo AS code, descr, CONCAT(descr, ' | MAFENSA') AS alt, foto AS 'path' FROM mln_articulos WHERE temporada2 = 1");

        while ($fila = $consulta->fetch(PDO::FETCH_ASSOC)) {
            array_push($datos, $fila);
        }

        $result['datos'] = $datos;
    }
}

$conn = null;
echo json_encode($result);
die()
?>