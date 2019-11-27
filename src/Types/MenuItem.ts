import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export class MenuItem {

    Component: React.FC;
    Route: string;
    MenuName: string;
    Icon: IconDefinition;

    constructor(component: React.FC, route: string, menuName: string, icon: IconDefinition) {
        this.Component = component;
        this.Route = route;
        this.MenuName = menuName;
        this.Icon = icon
    }
}
