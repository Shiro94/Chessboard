import {LichessClient, LichessClientSettings} from "./LichessClient";
import {Game} from "./Game";

export class Chessboard {
    constructor() {
        let settings: LichessClientSettings = {};
        let client: LichessClient = new LichessClient(settings);
        let game: Game = new Game(client);
        game.create();
    }
}