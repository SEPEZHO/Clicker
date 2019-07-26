<?php
if(isset($_POST["mail"]) && isset($_POST["login"]) && isset($_POST["pass"]) && isset($_POST["numCl"]) && isset($_POST["inv"]) && isset($_POST["set"])){

  $mysqli = new mysqli ("localhost", "root", "", "Users_cl");
  $mysqli-> query("SET NAMES 'utf8'");

  $mail = htmlspecialchars($_POST["mail"]);
  $login = htmlspecialchars($_POST["login"]);
  $pass = htmlspecialchars($_POST["pass"]);
  $numCl = htmlspecialchars($_POST["numCl"]);
  $inv = $_POST["inv"];
  $set = $_POST["set"];

  $error_mail= '';
  $error_login= '';
  $error_pass= '';

    $succsess = $mysqli-> query("INSERT INTO `Users_log` (`id`, `email`, `login`, `password`) VALUES (NULL, '$mail', '$login', '".md5($pass)."')");
    $lastId = $mysqli->insert_id;
    if($succsess){
      $succsess_data = $mysqli-> query("INSERT INTO `Users_data` (`id`, `clicks`, `inventory`, `settings`) VALUES ('$lastId', '$numCl', '$inv', '$set')");
      if($succsess_data){
        $from = 'sepezho@gmail.com';
        $to = $mail;
        $subject = 'Clicker';
        $message = "id: $lastId;\nlogin: $login;\npass: $pass;\nmail: $mail;\nСпасибо за регистрацию.";
        $subject = "=?utf-8?B?".base64_decode($subject)."?=";
        $headers = "From: $from \r\nReply-to: $from\r\nContent-type: text/plain; charset=utf-8\r\n";
        mail ($to, $subject, $message, $headers);
      }else{
        $mysqli-> query("DELETE FROM `Users_log` WHERE `id` = '$lastId'");
        $mysqli->query("ALTER TABLE `Users_log` auto_increment = 1");
        $error_pass = 'Произошла ошибка отправки данных игры';
      }
    }else{
      $mysqli->query("ALTER TABLE `Users_log` auto_increment = 1");

      $res_log = $mysqli-> query("SELECT `login` FROM `Users_log` WHERE `login` = '$login'");
      $res_mail = $mysqli-> query("SELECT `email` FROM `Users_log` WHERE `email` = '$mail'");

      if(mysqli_num_rows($res_log) == 1){
        $error_login = 'Такой логин уже существует';
      }
      if(mysqli_num_rows($res_mail) == 1){
        $error_mail = 'Такая почта уже существует';
      }
      if(mysqli_num_rows($res_log) == 0 && mysqli_num_rows($res_mail) == 0){
        $error_pass = 'Произошла неизвестная ошибка';
      }
    }
  $result = array(
    'error_mail' => $error_mail,
    'error_login' => $error_login,
    'error_pass' => $error_pass
  );
  echo json_encode($result);

  $mysqli -> close();
}
?>
