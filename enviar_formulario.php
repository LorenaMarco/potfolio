<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$destinatario = 'contacto@digitalmenenia.com';
$asunto_email = 'Nuevo mensaje desde el formulario de contacto';

$contenido_email = "Nombre: $nombre\n";
$contenido_email .= "Email: $email\n";
$contenido_email .= "Asunto: $asunto\n";
$contenido_email .= "Mensaje: $mensaje\n";

$headers = 'From: tu_direccion_de_email@example.com' . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($destinatario, $asunto_email, $contenido_email, $headers);

echo "Su mensaje ha sido enviado"// Redireccionar o mostrar un mensaje de éxito
?>
