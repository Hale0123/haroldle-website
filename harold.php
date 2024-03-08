<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if(isset($_POST["send"])){
    try {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'haroldle2735@gmail.com';
        $mail->Password = 'ssutfhtycihhrfpu'; // App generated password
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom('haroldle2735@gmail.com');
        $mail->addAddress($_POST["email"]);
        $mail->isHTML(true);
        $mail->Subject = $_POST["name"];
        $mail->Body = $_POST["message"];

        $mail->send();
        echo "
            <script>
            alert('Sent Successfully');
            document.location.href = 'harold.html'
            </script>
            ";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
