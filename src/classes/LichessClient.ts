import {Http} from "./Http";
import fetch from "node-fetch";
import {RequestInit} from "node-fetch";

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
        Http.fetchJSON('/')
            .then(function(body) {
                console.log(body);
            });
    }
}