import { IFooter } from "./IFooter";
import { INavBar } from "./INavBar";

export interface IPageTemplate {
    navbar?: INavBar;
    content: React.ReactNode;
    footer?: IFooter;
}