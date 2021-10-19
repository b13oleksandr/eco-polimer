<?php
if (isset($_POST['submit'])) {
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $phone = $_REQUEST['phone'];

    $to = $email;
    $subject = 'Contact Request From Website';
    $headers = $name." <".$email."> \r\n";

    mail($to, $subject, $headers);
}
