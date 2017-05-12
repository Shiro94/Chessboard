import {LichessClient} from "./LichessClient";
import merge = require("lodash.merge");
import {Http} from "./Http";
import request = require("request");
import {GameSocket, GameSocketListener} from "./GameSocket";
var exec = require('child_process').exec;

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

export interface Challenge {
    challenge: {
        id: string,
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
    private _options: GameOptions = { variant: 1, fen: '', timeMode: 0,
        time: 5.0, increment: 8, days: 2, color: 'random', mode: 0
    };
    private socket: GameSocket;

    constructor(options?: GameOptions) {
        this._options = merge(this._options, options);
    }

    public create(listener: GameSocketListener) {
        Http.fetchJSON('/setup/friend', {
            method: 'POST',
            body: JSON.stringify(this._options)
        }).then((challenge: Challenge) => {
            exec('start firefox https://de.lichess.org/' + challenge.challenge.id , function(err) {});
            this.socket = new GameSocket(listener).join(challenge.challenge.id);
        });
    }

    public join(listener: GameSocketListener, id: string) {
        Http.fetchJSON('/challenge/' + id + '/accept', {
            method: 'POST'
        }).then((json: any) => {
            this.socket = new GameSocket(listener).join(json.url.socket);
        });
    }

    get options(): GameOptions {
        return this._options;
    }

    set options(value: GameOptions) {
        this._options = value;
    }
}