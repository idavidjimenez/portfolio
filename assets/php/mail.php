<?php

if (isset($_POST['nombre'])  && !empty($_POST['nombre']) &&
	 isset($_POST['mail'])    && !empty($_POST['mail'])   &&
	 isset($_POST['mensaje']) && !empty($_POST['mensaje'])) {

	$nombre = $_POST['nombre'];
	$correo = $_POST['mail'];
   $asunto = $_POST['asunto'];
   $telefono = $_POST['telefono'];
   $mensaje = nl2br($_POST['mensaje']);

   if(empty($asunto)   || $asunto   == '') $asunto   = 'No lo ha indicado';
   if(empty($telefono) || $telefono == '') $telefono = 'No lo ha proporcionado';

	$to = 'davidjimenezweb@gmail.com';

   $body = <<<HTML
   
      <h1>Contacto desde la web</h1>
      <p style="font-size: 18px;">De: $nombre — $correo</p>
      <p style="font-size: 18px;">Teléfono: $telefono</p>
      <p style="font-size: 18px;">El posible cliente prefiere: $asunto</p>
      <h2>Mensaje</h2>
      <p style="font-size: 18px;">$mensaje</p>
   
   HTML;

	// * Configuración de los encabezados
	$headers = "MIME-Version: 1.0 \r\n";
   $headers.= "Content-type: text/html; charset=utf-8 \r\n";

   // * Cabeceras adicionales
	$headers.= "From: Portfolio — Contacto <davidjimenezweb@tb-hosting.com> \r\n";
   // $headers.= "Cc: copia@gmail.com \r\n";
   // $headers.= "Bcc: copia-oculta@gmail.com \r\n";

	// * Enviar correo
	$envio = mail($to, 'Han rellenado el formulario del portfolio', $body, $headers);
	echo '<script language="javascript">window.location.href="../../confirmacion/"</script>';

} else {

	echo '<script language="javascript">alert("Complete los campos obligatorios");window.location.href="../../contacto/"</script>';

}

?>