import NavBar from "../components/NavBar/NavBarFI";
import Footer from "../components/Footer/FooterFI";
import About from "../components/About/AboutFI";
import SideBar from "../components/SideBar/SideBarFI";

import WelcomePage from "../pages/WelcomePage/WelcomePageFI";
import WelcomePageC from "../pages/WelcomePage/WelcomePageCFI";

import HomePage from "../pages/HomePage/HomePageFI";
import HomePageC from "../pages/HomePage/HomePageCFI";

import ErrorPage from "../pages/ErrorPage/ErrorPageFI";
import ErrorPageC from "../pages/ErrorPage/ErrorPageCFI";

import { IFooter } from "../interfaces/IFooter";

import {
    DEFAULT_ROUTE,
    HOME_ROUTE,
    CHANGES_ROUTE,
    UNDEFINED_ROUTE,
} from '../utils/consts.js';

////////////////////////////////////////////////////////////////////////////////

export const authAdminRoutes = [

];

export const authUserRoutes = [

];

export const publicRoutes = [
    {
        path: DEFAULT_ROUTE,
        element: <WelcomePage
            content={WelcomePageC()}
            about={About()}
        />,
    },
    /*{
        path: HOME_ROUTE,
        element: <HomePage 
            navbar={NavBar(<NavBar />)}
            content={HomePageC()}
            footer={Footer()}
            sidebar={SideBar()}
        />,
    },*/
    {
        path: UNDEFINED_ROUTE,
        element: <ErrorPage 
            content={ErrorPageC()}
        />
    }
]