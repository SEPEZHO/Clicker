<?php
if(isset($_POST["id"]) && isset($_POST["numCl"]) && isset($_POST["inv"]) && isset($_POST["set"])){
  $mysqli = new mysqli ("localhost", "s50962_dbuser", "37xZmjp<jF^G698t", "s50962_db");
  $mysqli-> query("SET NAMES 'utf8'");
  $id = $_POST["id"];
  $numCl = $_POST["numCl"];
  $inv = $_POST["inv"];
  $set = $_POST["set"];
  $succsess_data = $mysqli-> query("UPDATE `Users_data` SET `clicks` = '$numCl' , `inventory` = '$inv', `settings` ='$set' WHERE `id` = '$id'");
  $succsess_data ? $is_done = 'done': $is_done = 'Error';
  $result = array(
    'done' => $is_done,
  );
  echo json_encode($result);

  $mysqli -> close();
}
?>
