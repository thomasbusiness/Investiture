<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

  if ($email) {
    $token = bin2hex(random_bytes(16));
    $subject = "Confirmation d'inscription";
    $message = "Bonjour $name,\n\nCliquez sur le lien pour confirmer votre inscription :\n";
    $message .= "https://votre-site.com/confirm.php?token=$token";
    $headers = "From: noreply@votre-site.com";

    mail($email, $subject, $message, $headers);

    // Enregistrer dans la base avec le token
    // INSERT INTO users (name, email, password, token, confirmed) VALUES (...)

    echo "Email de confirmation envoyé.";
  } else {
    echo "Email invalide.";
  }
}
?>
