import { ILogo } from "./ILogo";

export interface IFooter extends React.FC {
    logo: ILogo;
    tech: string[];
}