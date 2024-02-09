<?php

// * Comprobamos si viene desde un form POST
if($_SERVER['REQUEST_METHOD'] != 'POST') {

	header('Location: ../../contacto/');

}

require '../vendor/phpmailer/PHPMailer.php';
require '../vendor/phpmailer/Exception.php';
require '../vendor/phpmailer/SMTP.php';

// * Import PHPMailer classes into the global namespace
// * These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

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

// * Create an instance; passing `true` enables exceptions
$mailer = new PHPMailer();
$mailer -> setFrom($mail, "$nombre");
$mailer -> addAddress('davidjimenezweb@gmail.com', 'Sitio web');
$mailer -> Subject = 'Mensaje desde la web';
$mailer -> msgHTML($body);
$mailer -> AltBody = strip_tags($body); // * Elimina etiquetas si el gestor de mail no soporta HTML

$answer = $mailer -> send();
header('Locatioin: Location: ../../contacto/confirmacion/');

?>