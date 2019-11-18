import Match from "./Match";

export default class Round {
    name: string;
    matches: Match[];

    constructor(name: string, matches: Match[]) {
        this.name = name;
        this.matches = matches;
    }
}
