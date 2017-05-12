import fetch from 'node-fetch';
import {RequestInit, Response} from "node-fetch";
import merge = require("lodash.merge");

export class Http {
    private static readonly BASE_URL = 'https://de.lichess.org';

    public static fetch(url : string, options?: RequestInit): Promise<Response> {
        options = merge({
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/vnd.lichess.v2+json',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: '{}'
        }, options);
        return fetch(Http.BASE_URL + url, options);
    }

    public static fetchJSON<T>(url : string, options?: RequestInit): Promise<T> {
        return Http.fetch(url, options)
            .then(r => r.json() as Promise<T>);
    }

    public static fetchText(url : string, options?: RequestInit): Promise<String> {
        return Http.fetch(url, options)
            .then(r => r.text());
    }
}