import React from 'react';
import WelcomingLogotype from '../../components/logo/WelcomingLogo/WelcomingLogoFI';

import { HOME_ROUTE } from '../../utils/consts';
const triangle = require('../../assets/triangle.png');
const triangleRG = require('');
const triangleRB = require('');
const triangleBG = require('');
const abbreviation = require('../../assets/abbreviation.png');

const WelcomePageC = () => {
    return (
        <div className='WelcomeScreen'>
            <WelcomingLogotype
                logoImgSrc={triangle}
                RG={triangleRG}
                RB={triangleRB}
                BG={triangleBG}
                additionalImgSrc={abbreviation}
                link={HOME_ROUTE}
            />
        </div>
    )
}

export default WelcomePageC;