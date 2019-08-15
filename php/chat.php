<?php
require_once ('../vendor/autoload.php');
use Workerman\Worker;

// SSL context.
$context = array(
    'ssl' => array(
      'local_cert'=> '/home/s50962/ssl/certs/sepezho_ru_c53de_67889_1573308743_9bc6cca7fd85882a823551e2561ee831.crt',
        'local_pk' => '/home/s50962/ssl/keys/c53de_67889_a3169f1d541de2e450c39cd7959c742c.key',
       'verify_peer'  => false,
    )
);


// Create a Websocket server with ssl context.
$ws_worker = new Worker("websocket://0.0.0.0:8080", $context);


// Enable SSL. WebSocket+SSL means that Secure WebSocket (wss://). 
// The similar approaches for Https etc.
$ws_worker->transport = 'ssl';

// Emitted when new connection come
$ws_worker->onConnect = function($connection)
{
    echo "New connection\n";
// print_r (Worker::getAllWorkers());
};

$ws_worker->onMessage = function($connection, $data) use ($ws_worker)
{
    // Send hello $data
    $data = json_decode($data);
    $date = date("H:i");
    $messageArray = [
        'user' => $data->chat_user,
        'lvl' => $data->chat_lvl,
        'message' => $data->chat_message,
        'date' => $date
        ];
    // отправляем сообщение
    foreach ($ws_worker->connections as $connect) {
       $connect->send(json_encode($messageArray));
    }
};
// Emitted when connection closed
$ws_worker->onClose = function($connection)
{
    echo "Connection closed\n";
};

Worker::runAll();



// require_once ('../vendor/autoload.php');
// use Workerman\Worker;
// use Workerman\Connection\AsyncTcpConnection;

// $worker = new Worker();
// $worker->onWorkerStart = function()
// {
//     $context = array(
//     'ssl' => array(
//       'local_cert'=> '/home/s50962/ssl/certs/sepezho_ru_c53de_67889_1573308743_9bc6cca7fd85882a823551e2561ee831.crt',
//         'local_pk' => '/home/s50962/ssl/keys/c53de_67889_a3169f1d541de2e450c39cd7959c742c.key',
//         'verify_peer' => false
//         )
//     );

//     $ws_connection = new Worker("websocket://0.0.0.0:8080", $context);

//     $ws_connection->transport = 'ssl';

//     $ws_connection->onConnect = function($connection){
//         $connection->send('hello');
//     };
//     $ws_connection->onMessage = function($connection, $data){
//         echo "recv: $data\n";
//     };
//     $ws_connection->onError = function($connection, $code, $msg){
//         echo "error: $msg\n";
//     };
//     $ws_connection->onClose = function($connection){
//         echo "connection closed\n";
//     };
//     // $ws_connection->connect();
// };
// Worker::runAll();