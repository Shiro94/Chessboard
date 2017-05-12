import {LichessClient, LichessClientSettings} from "./LichessClient";
import {Game} from "./Game";
import {GameSocketListener} from "./GameSocket";

export class Chessboard implements GameSocketListener {
    constructor() {
        let game: Game = new Game();
        game.join(this, 'NwIBOt55');
    }
}