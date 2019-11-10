export class Team {
    Guid: string;
    Name: string;
    Url: string
    constructor(guid: string, name: string, url: string) {
        this.Guid = guid;
        this.Name = name;
        this.Url = url;
    }
}