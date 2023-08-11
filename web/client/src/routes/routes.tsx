import NavBar from "../components/NavBar/NavBarFI";

import About from "../components/About/AboutFI";
import SideBar from "../components/SideBar/SideBarFI";

import WelcomePage from "../pages/WelcomePage/WelcomePageFI";
import WelcomePageC from "../pages/WelcomePage/WelcomePageCFI";

import AboutPage from "../pages/AboutPage/AboutPageFI";
import AboutPageC from "../pages/AboutPage/AboutPageCFI";

import AdminPage from "../pages/AdminPage/AdminPageFI";
import AdminPageC from "../pages/AdminPage/AdminPageCFI";

import DocumentsPage from "../pages/DocumentsPage/DocumentsPageFI";
import DocumentsPageC from "../pages/DocumentsPage/DocumentsPageCFI";

import HistoricalGalleryPage from "../pages/HistoricalGalleryPage/HistoricalGalleryPageFI";
import HistoricalGalleryPageC from "../pages/HistoricalGalleryPage/HistoricalGalleryPageCFI";

import StatisticsPage from "../pages/StatisticsPage/StatisticsPageFI";
import StatisticsPageC from "../pages/StatisticsPage/StatisticsPageCFI";

import HomePage from "../pages/HomePage/HomePageFI";
import HomePageC from "../pages/HomePage/HomePageCFI";

import ErrorPage from "../pages/ErrorPage/ErrorPageFI";
import ErrorPageC from "../pages/ErrorPage/ErrorPageCFI";

import {
    DEFAULT_ROUTE,
    HOME_ROUTE,
    DOCUMENTS_ROUTE,
    UNDEFINED_ROUTE,
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    GALLERY_ROUTE,
    STATISTICS_ROUTE
} from '../utils/consts.js';
import Footer from "../components/Footer/FooterFI";

const logoImg = require("../assets/logo.png");

////////////////////////////////////////////////////////////////////////////////

export const authAdminRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <AdminPage 
            navbar={NavBar(
                logoImg,
                )}
            content={AdminPageC()}
            footer={Footer(
                logoImg,
            )}
        />
    },
    {
        path: DOCUMENTS_ROUTE,
        element: <DocumentsPage 
            navbar={NavBar(
                logoImg,
            )}
            content={DocumentsPageC()}
            footer={Footer(
                logoImg,
            )}
        />,
    },
];

export const publicRoutes = [
    {
        path: DEFAULT_ROUTE,
        element: <WelcomePage
            content={WelcomePageC()}
            about={About()}
        />,
    },
    {
        path: HOME_ROUTE,
        element: <HomePage 
            content={HomePageC()}
            sidebar={SideBar(
                logoImg
            )}
        />,
    },
    {
        path: ABOUT_ROUTE,
        element: <AboutPage 
            navbar={NavBar(
                logoImg,
            )}
            content={AboutPageC()}
            footer={Footer(
                logoImg
            )}
        />
    },
    {
        path: GALLERY_ROUTE,
        element: <HistoricalGalleryPage 
            navbar={NavBar(
                logoImg,
            )}
            content={HistoricalGalleryPageC()}
            footer={Footer(
                logoImg
            )}
        />
    },
    {
        path: STATISTICS_ROUTE,
        element: <StatisticsPage 
            navbar={NavBar(
                logoImg,
            )}
            content={StatisticsPageC()}
            footer={Footer(
                logoImg,
            )}
        />
    },
    {
        path: UNDEFINED_ROUTE,
        element: <ErrorPage 
            content={ErrorPageC()}
        />
    }
]