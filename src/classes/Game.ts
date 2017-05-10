import {LichessClient} from "./LichessClient";
import merge = require("lodash.merge");
import {Http} from "./Http";
import request = require("request");
import {Socket} from "./Socket";

export interface GameOptions {
    variant?: number, //1 (standard) | 2 (chess960) | 3 (from position) | 4 (KotH)
    timeMode?: number,
    time?: number,
    increment?: number,
    mode?: number,
    days?: number,
    color?: string,
    fen?: string,
}

export interface Challange {
    challenge: {
        id: number,
        direction: string,
        status: string,
        challenger: string,
        destUser: string,
        variant: {
            key: string,
            short: string,
            name: string
        },
        initialFen: string,
        rated: boolean,
        timeControl: {
            type: string
        },
        color: string,
        perf: {
            icon: string,
            name: string
        },
        socketVersion: number
    }
}

export class Game {
    private client: LichessClient;
    private defaultGameOptions: GameOptions = { variant: 1, fen: '', timeMode: 0,
        time: 5.0, increment: 8, days: 2, color: 'random', mode: 0
    };

    constructor(client: LichessClient) {
        this.client = client;
    }

    create(options?: GameOptions) {
        options = merge(this.defaultGameOptions, options);
        Http.fetchJSON('/setup/friend', {
            method: 'POST',
            body: JSON.stringify(options)
        }).then((challange: Challange) => {
            let socket: Socket = new Socket();
            socket.joinChallenge(challange);
        });
    }
}