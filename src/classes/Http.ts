import fetch from 'node-fetch';
import {LichessClientSettings} from "./LichessClient";
import {RequestInit} from "node-fetch";

export class Http {
    private static readonly BASE_URL = 'https://en.stage.lichess.org';

    public static fetchJSON(url : string, options?: RequestInit) {
        let _default: RequestInit = {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/vnd.lichess.v2+json',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: '{}'
        };
        return fetch(Http.BASE_URL + url, _default);
    }
}