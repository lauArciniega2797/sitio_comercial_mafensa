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
        $consulta = $conn->query("SELECT 
                                    a.articulo,
                                    a.descr, 
                                    a.barras, 
                                    a.temporada1 AS verano, 
                                    a.temporada2 AS invierno, 
                                    a.temporada3, 
                                    a.temporada4, 
                                    a.novedad, 
                                    a.foto, 
                                    d.orden,
                                    d.titulo as depa 
                                FROM mln_articulos a
                                LEFT JOIN mln_familia1 d ON d.llave = a.fam1
                                WHERE activo = 1");

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