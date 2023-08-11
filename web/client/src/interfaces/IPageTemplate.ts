import { IFooter } from "./IFooter";
import { INavBar } from "./INavBar";

export interface IPageTemplate {
    navbar?: React.ReactNode;
    content: React.ReactNode;
    footer?: React.ReactNode;
}