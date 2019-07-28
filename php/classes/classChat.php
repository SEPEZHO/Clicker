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
}
?>