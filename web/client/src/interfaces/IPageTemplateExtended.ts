import { IPageTemplate } from "./IPageTemplate";

export interface IPageTemplateExtended extends IPageTemplate {
    sidebar?: React.ReactNode;
    about?: React.ReactNode;
}