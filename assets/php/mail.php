<?php

// * Comprobamos si viene desde un form POST
if($_SERVER['REQUEST_METHOD'] != 'POST') {

	header('Location: ../../contacto/');

}

// * Guardamos los inputs en variables
$asunto   = $_POST['asunto'];
$nombre   = $_POST['nombre'];
$mail     = $_POST['mail'];
$telefono = $_POST['telefono'];
$mensaje  = $_POST['mensaje'];

// * Comprobamos si ha rellenado o marcado lo neceario, si no lo sustituimos
if(empty(trim($nombre))) $nombre = 'Anónimo';
if(empty(trim($asunto))) $asunto = 'No seleccionado';

$body = 
<<<HTML

	<h1>Contacto desde la web</h1>
	<p>De: $nombre — $mail</p>
	<p>Al posible cliente le gustaría: $asunto</p>
	<h2>Mensaje</h2>
	$mensaje

HTML;

// * cABECERAS
$headers = "MIME-Version: 1.0 \r\n";
$headers.= "Content-type: text/html; charset=utf-8 \r\n";
$headers.= "From: $nombre <$mail> \r\n";
$headers.= "To: Sitio web <davidjimenezweb@gmail.com> \r\n";
// $headers.= "Cc: copia@gmail.com \r\n";
// $headers.= "Bcc: copia-oculta@gmail.com \r\n";

// * Remitente
$rta = mail('davidjimenezweb@gmail.com', "Mensaje desde la web", $body, $headers);
header('Locatioin: Location: ../../contacto/confirmacion/');

?>