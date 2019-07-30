<?php 
define('PORT', 8080);

require_once ('classes/classChat.php');

$chat = new chat();

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

socket_set_option($socket, SOL_SOCKET, SO_REUSEADDR, 1);
socket_bind($socket, 0, PORT);

socket_listen($socket);

$clientSocketArray = array($socket);

while (true){
  $newSocketArray = $clientSocketArray;
  $nullA = [];
  socket_select($newSocketArray, $nullA, $nullA, 0, 10);

  if(in_array($socket, $newSocketArray)){
    $newSocket = socket_accept($socket);
    $clientSocketArray[]=$newSocket;
    
    $header = socket_read($newSocket, 1024);
    $chat -> sendHeaders($header, $newSocket, 'localhost/clicker', PORT);

    socket_getpeername($newSocket, $client_ip_address);

    $connectionACK = $chat->newConnectionACK($client_ip_address);
    $chat->send($connectionACK, $clientSocketArray);

    $newSocketArrayIndex = array_search($socket, $newSocketArray);
    unset($newSocketArray[$newSocketArrayIndex]);
  }

  foreach ($newSocketArray as $newSocketArrayResource) {
    
    while(@socket_recv($newSocketArrayResource, $socketData, 1024, 0) >= 1){
      $socketMessage = $chat->unseal($socketData);
      $messageObj = json_decode($socketMessage);

      $chatMessage = $chat->createChatMeassage($messageObj->chat_user, $messageObj->chat_lvl, $messageObj->chat_message);
      $chat->send($chatMessage, $clientSocketArray);
      break 2;
    }

    $socketData = @socket_read($newSocketArrayResource, 1024, PHP_NORMAL_READ);
    if($socketData === false){
      socket_getpeername($newSocketArrayResource, $client_ip_address);
      $connectionACK = $chat->newDisconectedACK($client_ip_address);
      $chat->send($connectionACK, $clientSocketArray);
      $newSocketArrayIndex = array_search($newSocketArrayResource, $clientSocketArray);
      unset($clientSocketArray[$newSocketArrayIndex]);
    }
  }
}

socket_close($socket);
?>