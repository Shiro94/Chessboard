import {Challange} from "./Game";

export const clientId: string = Math.random().toString(36).substring(2).slice(0, 10);

export class Socket {
    private challange: Challange;

    public joinChallenge(challange: Challange) {
        this.challange = challange;
    }
}