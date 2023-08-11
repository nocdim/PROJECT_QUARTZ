import { ReactElement } from "react";
import { ILogo } from "./ILogo";
import { ISearchBar } from "./ISearchBar";

export interface INavBar extends React.ReactElement {
    logo: ILogo;
    searchBar?: ISearchBar;
    isOpen?: boolean; // something to do with scalable navbar (opening options)
}