import {Chessboard} from './classes/Chessboard';

let chessboard: Chessboard = new Chessboard();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


/*
var socketVersion = 0;
const WebSocket = require('ws');

var socketUrl = 'https://socket.listage.ovh/.../socket/v2?sri=jzppuc4q2u';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error: any) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection: any) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error: any) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message: any) {
        if (message.type === 'utf8') {
            console.log("Received: '" + message.utf8Data + "'");
        }
    });

    function sendNumber() {
        if (connection.connected) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            connection.sendUTF(number.toString());
            setTimeout(sendNumber, 1000);
        }
    }
    sendNumber();
});

client.connect(socketUrl, 'echo-protocol');
*/