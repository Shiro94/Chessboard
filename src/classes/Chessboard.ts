
import {LichessClient, LichessClientSettings} from "./LichessClient";

export class Chessboard {
    constructor() {
        let settings: LichessClientSettings = {

        };
        let client: LichessClient = new LichessClient(settings);
        client.getDailyPuzzle();
    }
}