import React from 'react';
import WelcomingLogotype from '../../components/logo/WelcomingLogo/WelcomingLogoFI';
import { HOME_ROUTE } from '../../utils/consts';
const logo = require("../../assets/logo.png");
//const addImg = require("../../assets/heptagram.png");
/*const e1 = require("../../assets/elements/element1.png");
const e2 = require("../../assets/elements/element2.png");
const e3 = require("../../assets/elements/element3.png");
const e4 = require("../../assets/elements/element4.png");
const e5 = require("../../assets/elements/element5.png");
const e6 = require("../../assets/elements/element6.png");
const e7 = require("../../assets/elements/element7.png"); */
const codeName = ['P','R','O','J','E','C','T',' ','Q','U','A','R','T','Z',' '];
const hiddenMessage = 
['З', 'а', 'з', 'а', 'с', ' ',
'З', 'а', 'з', 'а', 'с', ' ', 
'Н', 'а', 'с', 'а', 'т', 'а', 'н', 'а', 'д', 'а', ' ',
'З', 'а', 'з', 'а','с', ' '];

const WelcomePageC = () => {
    return (
        <WelcomingLogotype
            link={HOME_ROUTE}
            logoImgSrc={logo}
            abbreviation={codeName}
            elements={hiddenMessage}
        />
    )
}

export default WelcomePageC;