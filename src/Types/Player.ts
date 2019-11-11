export class Player {
    Id: string;
    Name: string;
    SurName: string
    Position: string
    constructor(id: string, name: string, url: string, position: string) {
        this.Id = id;
        this.Name = name;
        this.SurName = url;
        this.Position = position;
    }
}