<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$subject = 'Форма консультація фахівця';
$headers = $name . " - " . $email ." - ". $phone . " \r\n";

mail('raptor.teh@gmail.com', $subject, $headers);
