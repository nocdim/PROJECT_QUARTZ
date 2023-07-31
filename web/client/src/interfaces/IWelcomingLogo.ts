import { ILogo } from "./ILogo";

export interface IWelcomingLogo extends ILogo {
    addImg?: string;
    abbreviation: string[];
    elements: string[];
}