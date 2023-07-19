import React from 'react';
import WelcomingLogotype from '../../components/logo/WelcomingLogo/WelcomingLogoFI';

import { HOME_ROUTE } from '../../utils/consts';
const triangle = require('../../assets/triangle.png');
const triangleO = require('../../assets/triangleO.png');
const triangleL = require('../../assets/triangleL.png');
const triangleP = require('../../assets/triangleP.png');

const WelcomePageC = () => {
    return (
        <div className='WelcomeScreen'>
            <WelcomingLogotype
                logoImgSrc={triangle}
                triangleO={triangleO}
                triangleL={triangleL}
                triangleP={triangleP}
                link={HOME_ROUTE}
            />
        </div>
    )
}

export default WelcomePageC;