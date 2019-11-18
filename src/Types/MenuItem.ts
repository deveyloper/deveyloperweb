export class MenuItem {

    Component: React.FC;
    Route: string;
    MenuName: string;

    constructor(component: React.FC, route: string, menuName: string) {
        this.Component = component;
        this.Route = route;
        this.MenuName = menuName;
    }
}
