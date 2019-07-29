<?php 
class chat{
	public function sendHeaders($headersText, $newSocket, $host, $port){
		$headers = array();
		$tmpLine = preg_split('/\r\n/', $headersText);
		foreach ($tmpLine as $line) {
			$line = rtrim($line);
			if(preg_match('/\A(\S+): (.*)\z/', $line, $matches)){
				$headers[$matches[1]] = $matches[2];
			}
		}
		$key = $headers['Sec-WebSocket-Key'];
		$sKey = base64_encode(pack('H*', sha1($key.'258EAFA5-E914-47DA-95CA-C5AB0DC85B11')));

		$strHeader = "HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nWebSocket-Origin: $host\r\nWebSocket-Location: ws://$host:$port/clicker 8.2.4/php/chat.php\r\nSec-WebSocket-Accept:$sKey\r\n\r\n";
		socket_write($newSocket, $strHeader, strlen($strHeader));
	}

	public function newConnectionACK($client_ip_address){
		$message = 'New client, ip: '. $client_ip_address;
		$messageArray = [
			'message' => $message,
			'type' => "newConnectionACK"
		];
		$ask=$this->seal(json_encode($messageArray));
		return $ask;
	}
	public function seal($socketData){
		$b1 = 0x81;
		$length = strlen($socketData);
		$header = "";

		if($length <=125){
			$header = pack('CC', $b1, $length);
		}elseif($length < 65536){
			$header = pack('CCn', $b1, 126, $length);
		}else{
			$header = pack('CCNN', $b1, 127, $length);
		}

		return $header.$socketData;
	}
	public function send($message, $clientSocketArray){
		$messageLength = strlen($message);

		foreach($clientSocketArray as $clientSocket){
			@socket_write($clientSocket, $message, $messageLength);
		}
		return true;
	}
}
?>