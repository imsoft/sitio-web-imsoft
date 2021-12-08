<?php
    
    require 'includes/PHPMailer.php';
    require 'includes/SMTP.php';
    require 'includes/Exception.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $json = file_get_contents('php://input');

    $params = json_decode($json);
 
    class Response {}

    if($params == null) {

        $response = new Response();
        $response -> resultado = 'FAIL';
        $response -> mensaje = "Error: parametros vacios";
        $response -> payload = $params;
        
    }
    else {

        $html = SMTP::BODYMAIL;
        $tags = array("[nombre]", "[mail]", "[telefono]", "[mensaje]");
        $val  = array($params -> nombre, $params -> mail,$params -> telefono, $params -> mensaje);

        $newhtml = str_replace($tags, $val, $html);

        $mail = new PHPMailer(true);

        try {
            
            $mail = new PHPMailer();
            $mail -> SMTPDebug  = SMTP::DEBUG_OFF;
            $mail -> isSMTP();
            $mail -> Host       = 'imsoft.com.mx';
            $mail -> SMTPAuth   = true;
            $mail -> Username   = "contacto@imsoft.com.mx";
            $mail -> Password   = "contacto_imsoft_2487";
            $mail -> SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail -> Port       = 465;
            $mail -> setFrom("contacto@imsoft.com.mx");
            $mail -> addAddress($params -> mail, $params -> nombre);
            $mail -> isHTML( true );
            $mail -> Subject    = "¡Contacto desde el sitio web!";
            $mail -> Body       = "<h1>Aqui va el mensaje</h1>";
            $mail -> send();
            $mail -> smtpClose();

            $response = new Response();
            $response->resultado = 'OK';
            $response->mensaje = 'mensaje enviado';
            $response->payload = $params;

        } catch( Exception $e ) {

            $response = new Response();
            $response->resultado = 'FAIL';
            $response->mensaje = "Error: { $mail -> ErrorInfo }";
            $response->payload = $params;

        }
    }

    header('Content-Type: application/json');
    echo json_encode($response);

?>