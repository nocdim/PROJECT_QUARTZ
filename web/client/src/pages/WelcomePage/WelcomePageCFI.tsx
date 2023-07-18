import React from 'react';
import WelcomingLogotype from '../../components/logo/WelcomingLogo/WelcomingLogoFI';

import { HOME_ROUTE } from '../../utils/consts';
let path = require('path');
let logoImgSrc: string = __dirname;
let additionalImgSrc: string = __dirname;

const WelcomePageC = () => {
    console.log(path)
    return (
        <WelcomingLogotype 
            logoImgSrc={logoImgSrc}
            additionalImgSrc={additionalImgSrc}
            link={HOME_ROUTE}
        />
    )
}

export default WelcomePageC;