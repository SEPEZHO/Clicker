<?php
if(isset($_POST["mailSnd"]) && isset($_POST["subjectSnd"]) && isset($_POST["messageSnd"])){

  $from = htmlspecialchars($_POST["mailSnd"]);
  $subject = htmlspecialchars($_POST["subjectSnd"]);
  $message = htmlspecialchars($_POST["messageSnd"]);

    $to = "sepezho@gmail.com";
    $subject = "=?utf-8?B?".base64_decode($subject)."?=";
    $headers = "From: $from \r\nReply-to: $from\r\nContent-type: text/plain; charset=utf-8\r\n";
    $success = mail ($to, $subject, $message, $headers);

    $success ? $is_done = 'Done': $is_done = 'Error';
    $result = array(
      'done' => $is_done,
    );
  echo json_encode($result);
}
?>
