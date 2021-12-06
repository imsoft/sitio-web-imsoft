<?php
    
    require '/includes/PHPMailer.php';
    require '/includes/SMTP.php';
    require '/includes/Exception.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $mail = new PHPMailer();

    $mail -> isSMTP();

    $mail -> Host = "imsoft.com.mx";

    $mail -> SMTPAuth = "true";

    $mail -> SMTPSecure = "ssl";

    $mail -> Port = "465";

    $mail -> Username = "contacto@imsoft.com.mx";

    $mail -> Password = "contacto_imsoft_2487";

    $mail -> Subject = "¡Contacto desde el sitio web!";

    $mail -> setFrom("contacto@imsoft.com.mx");

    $mail -> isHTML( true );

    $mail -> Body = "<h1>Aqui va el mensaje</h1>";

    $mail -> addAddress("contacto@imsoft.com.mx");

    $mail -> send();

    /*
    if( $mail -> send() ) {
        echo "Mail Send";
    }
    else {
        echo "Error";
    }
    */

    $mail -> smtpClose();

?>