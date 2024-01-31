<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header("Content-type: application/json");
date_default_timezone_set("America/Mexico_City");

require '../phpmailer/src/Exception.php';
require '../phpmailer/src/PHPMailer.php';
require '../phpmailer/src/SMTP.php';
include("../../config.php");

$result = array( 'error' => false );
if (isset($_GET['action'])) {
    $action = $_GET['action'];
    $datos = array();

    if ($action == 'sendData') {
        $ip = $_SERVER['REMOTE_ADDR'];
        // ***
        $titulo    = $_POST['title'];
        $nombre	   = $_POST['name'];
        $email	   = $_POST['email'];
        $tel	   = $_POST['phone'];
        $message   = $_POST['message'];
        
        if ($titulo == 'cliente' or $titulo == 'provider' or $titulo == '') {
            $city  = $_POST['city'];
        }

        $message_html = "
            <div>
                <p>Nuevo contacto desde el sitio web MAFENSA</p>
                <br />
                <h4>Nombre: $nombre</h4>
                <br />
                <p>Ciudad: $city</p>
                <p>Mensaje:</p>
                <p>$message</p>
                <br />
                <p>¡Ponte en contacto!</p>
                <br />
                <div style='gap: 30px;margin-top:0px'>
                    <p>
                        <span>Correo: <b>$email</b></span>
                    </p>
                    <p>
                        <span>Teléfono: <b>$tel</b></span>
                    </p> 
                </div>
            </div>
        ";

        if ($titulo == 'provider') {
            $message_html = "
                <div>
                    <p>Solicitud Proveedor</p>
                    <br />
                    <h4>Nombre: $nombre</h4>
                    <br />
                    <p>Ciudad: $city</p>
                    <p>Mensaje:</p>
                    <p>$message</p>
                    <br />
                    <p>¡Ponte en contacto!</p>
                    <br />
                    <div style='gap: 30px;margin-top:0px'>
                        <p>
                            <span>Correo: <b>$email</b></span>
                        </p>
                        <p>
                            <span>Teléfono: <b>$tel</b></span>
                        </p> 
                    </div>
                </div>
            ";
        }

        if ($titulo == 'cliente') {
            $namecomercial = $_POST['namecomercial'];
            $namecompras   = $_POST['namecompras'];
            $emailcompras  = $_POST['emailcompras'];
            $phonecompras  = $_POST['phonecompras'];

            $message_html = "
                <div>
                    <p>Nuevo Prospecto</p>
                    <br />
                    <h4>Prospecto: $nombre</h4>
                    <br />
                    <p>Nombre comercial: $namecomercial</p>
                    <p>Ciudad: $city</p>
                    <p>Encargado de compras: $namecompras</p>
                    <p>Email encargado: $emailcompras</p>
                    <p>Teléfono encargado: $phonecompras</p>
                    <p>Mensaje:</p>
                    <p>$message</p>
                    <br />
                    <p>¡Ponte en contacto!</p>
                    <br />
                    <div style='gap: 30px;margin-top:0px'>
                        <p>
                            <span>Correo: <b>$email</b></span>
                        </p>
                        <p>
                            <span>Teléfono: <b>$tel</b></span>
                        </p> 
                    </div>
                </div>
            ";
        }

        if ($titulo == 'bolsa') {
            $departamento  = $_POST['departamento'];
            $file          = $_FILES['file'];
            $interes_area  = $_POST['interes_area'];

            if ($file['name']) {
                $name_file = $file['name'];
                $tmp_file = $file['tmp_name'];
                
                $files_path = "../images/cv_solicitudes/$name_file";
                if (!move_uploaded_file($tmp_file, $files_path)) {
                    $result['file_move'] = false;
                }

            // $message_uploaded_file = "De igual manera le envio el archivo adjunto del postulante.";
            }
            $message_html = "
                <div style='background: #f3f6f9;border-top: 9px solid #fe842f;padding: 20px;'>
                    <p>Tiene un(a) nuevo(a) postulante para el área de <span><b>$interes_area</b></span></p>

                    <h4 style='font-size:20px'>Postulante: <span><b>$nombre</b></span></h4>
                    <p>Mensaje del postulante:</p>
                    <p>$message</p>
                    <br />
                    <br />
                    <h4>¡Ponte en contacto!</h4>
                    <div style='gap: 10px;margin-top:0px'>
                        <p>
                            <span>Correo: <b>$email</b></span>
                        </p>
                        <p>
                            <span>Teléfono: <b>$tel</b></span>
                        </p> 
                    </div>
                </div>
            ";
        }

        $mail = new PHPMailer; //instanciar la clase
        $mail->isSMTP();
        $mail->SMTPDebug = 0; // 0 = off (for production use) - 1 = client messages - 2 = client and server messages
        
        $mail->Host = "mail.mafensa.com"; // use $mail->Host = gethostbyname('smtp.gmail.com'); // if your network does not support SMTP over IPv6
        $mail->Port = 26; // TLS only
        $mail->SMTPSecure = 'tls'; // ssl is depracated
        $mail->SMTPAuth = true;
        $mail->Username = 'noresponder00@mafensa.com';
        $mail->Password = 'M4y0r30137/';
        $mail->setFrom('noresponder00@mafensa.com', 'MAFENSA');
        $mail->addAddress('sistemas1@mafensa.com');

        if ($titulo == '') {
            $mail->Subject = 'Mensaje desde el sitio web';
        }
        if ($titulo == 'bolsa') {
            $mail->Subject = 'Nueva Postulación - Sitio Web';
        }
        if ($titulo == 'cliente') {
            $mail->Subject = 'Nueva Cliente - Sitio Web';
        }
        if ($titulo == 'provider') {
            $mail->Subject = 'Nuevo Proveedor - Sitio Web';
        }

        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';

        if ($titulo == 'bolsa') {
            $mail->AddAttachment($files_path);
        }
        $mail->msgHTML($message_html); /**/

        if (!$mail->send()) {
            $result['mail'] = false;
        }
    } 
}

$conn = null;
echo json_encode($result);
die()
?>