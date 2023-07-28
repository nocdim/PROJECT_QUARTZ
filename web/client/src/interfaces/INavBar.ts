import { ILogo } from "./ILogo";
import { ISearchBar } from "./ISearchBar";

export interface INavBar {
    logo: ILogo;
    searchBar?: ISearchBar;
    isOpen?: boolean; // something to do with scalable navbar (opening options)
}