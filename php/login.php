<?php

if(isset($_POST["login"]) && isset($_POST["pass"])){
  $mysqli = new mysqli ("localhost", "root", "", "Users_cl");
  $mysqli-> query("SET NAMES 'utf8'");

  $login = htmlspecialchars($_POST["login"]);
  $pass = htmlspecialchars($_POST["pass"]);

  $error_pass= '';

    $result = $mysqli-> query("SELECT * FROM `Users_log` WHERE `login` = '$login' AND `password` = '".md5($pass)."'");
    $row = mysqli_fetch_assoc($result);

    if(isset($row['id'])){
      $result = $mysqli-> query("SELECT * FROM `Users_data` WHERE `id` = '".$row["id"]."'");
      $row = mysqli_fetch_assoc($result);

      if($result){
        
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
          $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
          $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
          $ip = $_SERVER['REMOTE_ADDR'];
        }
        $result = $mysqli-> query("SELECT * FROM `Users_log` WHERE `id` = '".$row["id"]."'");
        $rowMail = mysqli_fetch_assoc($result);

        $from = 'sepezho@gmail.com';
        $to = $rowMail['email'];
        $subject = 'Clicker';
        $message = "В ваш аккаунт был произведен вход.\nIp: $ip";
        $subject = "=?utf-8?B?".base64_decode($subject)."?=";
        $headers = "From: $from \r\nReply-to: $from\r\nContent-type: text/plain; charset=utf-8\r\n";
        mail ($to, $subject, $message, $headers);

      }else{
        $error_pass = 'Произошла ошибка при переносе данных.';
      }
    }else{
      $error_pass = 'Введен неверный логин или пароль.';
    }

  $result = array(
    'error_pass' => $error_pass,
    'id'=> $row["id"],
    'clicks' => $row['clicks'],
    'inventory' => $row['inventory'],
    'settings' => $row['settings']
  );
  echo json_encode($result);

  $mysqli -> close();
}
?>
