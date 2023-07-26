import { ILogo } from "./ILogo";

export interface IWelcomingLogo extends ILogo {
    addImg?: string;
    elements: string[];
}