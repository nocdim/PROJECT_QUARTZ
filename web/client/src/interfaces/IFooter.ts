import { ILogo } from "./ILogo";

export interface IFooter extends React.ReactElement {
    logo: ILogo;
    tech: string[];
    isOpen?: boolean;
}