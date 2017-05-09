import {Http} from "./Http";
import fetch from "node-fetch";

export interface LichessClientSettings {
    user?: string,
    password?: string
}

export class LichessClient {
    private settings: LichessClientSettings;

    constructor(settings: LichessClientSettings) {
        this.settings = settings;
    }

    public login(): boolean {

        return false;
    }

    public getDailyPuzzle(): void {
        console.log('get daily puzzle..');
        Http.fetchJSON('/training/daily')
            .then(function(res){
                return res.json();
            }).then(function(body) {
                console.log(body);
            });
    }
}