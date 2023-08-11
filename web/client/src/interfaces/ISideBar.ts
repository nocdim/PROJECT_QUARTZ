import { ILogo } from "./ILogo";

export interface ISideBar extends React.ReactElement {
    logo: ILogo,
    links: string[],
}