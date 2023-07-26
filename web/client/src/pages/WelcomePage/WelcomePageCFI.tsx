import React from 'react';
import WelcomingLogotype from '../../components/logo/WelcomingLogo/WelcomingLogoFI';
import { HOME_ROUTE } from '../../utils/consts';
const logo = require("../../assets/logo.png");
const e1 = require("../../assets/elements/element1.png");
const e2 = require("../../assets/elements/element2.png");
const e3 = require("../../assets/elements/element3.png");
const e4 = require("../../assets/elements/element4.png");
const e5 = require("../../assets/elements/element5.png");
const e6 = require("../../assets/elements/element6.png");
const e7 = require("../../assets/elements/element7.png");

const WelcomePageC = () => {
    return (
        <WelcomingLogotype
            link={HOME_ROUTE}
            logoImgSrc={logo}
            elements={[e1, e2, e3, e4, e5, e6, e7]}
        />
    )
}

export default WelcomePageC;