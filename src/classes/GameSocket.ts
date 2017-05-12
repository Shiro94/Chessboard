import {Challenge} from "./Game";
import * as WebSocket from 'ws';

export const clientId: string = Math.random().toString(36).substring(2).slice(0, 10);

export class GameSocket {
    private static readonly SOCKET_URL = 'https://socket.lichess.org';
    private listener: GameSocketListener;
    private socket: WebSocket;
    private version = 0;

    constructor(listener: GameSocketListener) {
        this.listener = listener;
    }

    public join(socket: string): GameSocket {
        // this.connect(GameSocket.SOCKET_URL + '/challenge/' + id + '/socket/v2?sri=' + clientId);
        this.connect(GameSocket.SOCKET_URL + socket + '?sri=' + clientId);
        return this;
    }

    private connect(url): WebSocket {
        console.log('connect with ' + url);
        this.socket = new WebSocket(url);
        this.socket.on('close',this.onclose);
        this.socket.on('error', this.onerror);
        this.socket.on('message', this.onmessage);
        this.socket.on('open', this.onopen);
        return this.socket;
    }

    private send(message: any) {
        console.log(message);
        this.socket.send(JSON.stringify(message));
    }

    private onclose = (code: number, message: string): void => {
        console.log(message);
    };

    private onerror = (err: Error): void => {
        console.log(err);
    };

    private onmessage = (data: any): void => {
        data = JSON.parse(data);
        console.log(data);
        if(this.messageHandler[data.t]) {
            this.messageHandler[data.t](data);
        }
    };

    private messageHandler = {
        n: () => {
            setTimeout(this.ping, 2000);
        },
        reload: (data) => {
            this.version = data.v;
        }
    };

    private ping = (): void => {
        this.send({t: 'ping', d: {}});
        this.send({t: 'p', v: this.version});
    };

    private onopen = (): void => {
        this.ping();
        setTimeout(this.resign, 5000);
        console.log('connection open');
    };

    private resign = (): void => {
        this.send({"t":"move","d":{"u":"e2e4"}});
    };
}

export interface GameSocketListener {

}