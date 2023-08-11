import { IFooter } from "./IFooter";
import { INavBar } from "./INavBar";
import { ISideBar } from "./ISideBar";

export interface IToggleNFS {
    navbar?: INavBar;
    footer?: IFooter;
    sidebar?: ISideBar;
}