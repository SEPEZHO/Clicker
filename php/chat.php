<?php 
define('PORT', 8080);

require_once ('classes/classChat.php');

$chat = new chat();

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

socket_set_option($socket, SOL_SOCKET, SO_REUSEADDR, 1);
socket_bind($socket, 0, PORT);

socket_listen($socket);

while (true){
  $newSocket = socket_accept($socket);
  $header = socket_read($newSocket, 1024);
  $chat -> sendHeaders($header, $newSocket, 'localhost/clicker 8.2.4', PORT);
}

socket_close($socket);
?>